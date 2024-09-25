import logging
import os

from pydantic_settings import BaseSettings

logging.config.fileConfig('logging.conf', disable_existing_loggers=False)
logger = logging.getLogger(__name__)


class Settings(BaseSettings):
    webhook_url: str = os.getenv('WEBHOOK_URL')
    webhook_prefix: str = os.getenv('WEBHOOK_PREFIX', default='here')


settings = Settings()
