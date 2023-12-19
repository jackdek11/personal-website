# Build from Python 3.11
FROM python:3.11-alpine

# Set working directory to /code/
WORKDIR /code

ENV PATH /home/root/.local/bin:${PATH}

RUN apk add curl

# Install requirements
COPY requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy over chrome_manager and logging config
COPY ./ /code/

# Entrypoint to container
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

HEALTHCHECK CMD curl --fail http://127.0.0.1:8000/healthz || exit 1
