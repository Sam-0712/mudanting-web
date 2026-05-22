#!/bin/bash
# Build and push Docker image for Mudanting
# Usage: ./pull.sh [tag]

TAG=${1:-latest}
IMAGE="nebulaaaaaaa/mudanting:${TAG}"

echo "==> Building ${IMAGE} ..."
docker build -t ${IMAGE} .

echo "==> Pushing ${IMAGE} ..."
docker push ${IMAGE}

echo "==> Done!"
