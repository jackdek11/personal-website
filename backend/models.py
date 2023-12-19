from pydantic import BaseModel


class RequestBody(BaseModel):
    email: str
    msg: str
    name: str


class HealthCheck(BaseModel):
    """Response model to validate and return when performing a health check."""
    status: str = "OK"
