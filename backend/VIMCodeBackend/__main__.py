import click
from VIMCodeBackend.launch import run_app

LOG_LEVELS = [
    "DEBUG",
    "INFO",
    "WARNING",
    "ERROR",
    "CRITICAL",
]

@click.command()
@click.option("-h", "--host", default="0.0.0.0", help="The IP address to bind to")
@click.option("-p", "--port", default=5000, help="The port to bind to")
@click.option("--config", type=click.Path(), required=False, help="The configuration file")
@click.option("--log_level", type=click.Choice(LOG_LEVELS, case_sensitive=False), default="INFO", help="Verbosity of logging")
def cli_launch(
    host: str, port: int, config: str, log_level: str
):
    run_app(host, port, config, log_level)
