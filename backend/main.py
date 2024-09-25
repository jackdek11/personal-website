from fastapi import FastAPI, status
from fastapi.openapi.utils import get_openapi
from fastapi.middleware.cors import CORSMiddleware
from discord_webhook import DiscordWebhook

from models import RequestBody, HealthCheck

from config import settings

import logging

app = FastAPI()

origins = ["*"]  # Might result in spamming.. I am going to trust the internet for now

logger = logging.getLogger(__name__)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/api/email/")
async def eft_checkout_request_view(body: RequestBody):
    built_msg = f"@{settings.webhook_at_user}\n\n**New message received:**\n```email: {body.email}\nname: {body.name}\nmsg: {body.msg}```"
    logger.debug(f"Receiving: {built_msg}")
    webhook = DiscordWebhook(
        url=settings.webhook_url,
        content=built_msg)
    try:
        _ = webhook.execute()
        return {"msg": "message sent."}
    except Exception as e:
        logger.debug(type(e))
        logger.error(e)


@app.get(
    "/healthz",
    tags=["healthcheck"],
    summary="Perform a Health Check",
    response_description="Return HTTP Status Code 200 (OK)",
    status_code=status.HTTP_200_OK,
    response_model=HealthCheck,
)
def get_health() -> HealthCheck:
    return HealthCheck(status="OK")


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema
    openapi_schema = get_openapi(
        title="Personal website",
        version="2.5.0",
        description="This is a very custom OpenAPI schema",
        routes=app.routes,
    )
    openapi_schema["info"]["x-logo"] = {
        "url": "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
    }
    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi
