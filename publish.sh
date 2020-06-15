#!/bin/sh

set -e

export DATE=2020-06-15

TAG="alexellis2/alexellisio:$DATE"

docker build -t $TAG . && docker push $TAG
