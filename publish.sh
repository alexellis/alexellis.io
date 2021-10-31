#!/bin/sh

set -e

export DATE=2021-10-31

TAG="alexellis2/alexellisio:$DATE"

docker build -t $TAG . \
    && docker push $TAG
