from VIMCodeBackend.config import VIMCodeBackendConfig
from fastapi import FastAPI
import uvicorn

__all__ = ["build_app", "run_app"]

def build_app(config: VIMCodeBackendConfig) -> FastAPI:
    app = FastAPI()
    return app

def run_app(host: str, port: int, config: VIMCodeBackendConfig, log_level: str):
    app = build_app(config)
    uvicorn.run(host, port, app=app)
