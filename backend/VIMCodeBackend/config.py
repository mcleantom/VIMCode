from pathlib import Path
from pydantic import BaseSettings
from typing import Optional


__all__ = [
    "get_config"
]

class MongoDBConfig(BaseSettings):
    connection_url: str


class VIMCodeBackendConfig(BaseSettings):
    db_config: MongoDBConfig

    class Config:
        env_prefix = "VIMCODEBACKEND_"
        env_nested_delimiter = "__"


def get_config(config_path: Optional[Path]) -> VIMCodeBackendConfig:
    if config_path:
        with open(config_path, "r") as f:
            return VIMCodeBackendConfig.parse_raw(f.read())
    return VIMCodeBackendConfig()
