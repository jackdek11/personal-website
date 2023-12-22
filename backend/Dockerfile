# Build from Python 3.11
FROM python:3.11-alpine

# Create a non-root user
RUN addgroup -g 1000 myuser && \
    adduser -D -u 1000 -G myuser myuser

# Set working directory to /code/
WORKDIR /code

ENV PATH /home/myuser/.local/bin:${PATH}

RUN apk add --no-cache curl

# Install requirements
COPY requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

# Copy over the application code
COPY ./ /code/

# Ensure that a user for the container has been created
USER myuser

# Entrypoint to container
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

HEALTHCHECK CMD curl --fail http://127.0.0.1:8000/healthz || exit 1
