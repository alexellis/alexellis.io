#!/bin/sh

set -e

export DATE=2021-06-01

TAG="alexellis2/alexellisio:$DATE"

docker build -t $TAG . \
    && docker push $TAG
