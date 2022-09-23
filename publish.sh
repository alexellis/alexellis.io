#!/bin/sh

set -e

TAG="alexellis2/alexellisio:$DATE"

export DOCKER_BUILDKIT=1

docker build -t $TAG . \
    && docker push $TAG
