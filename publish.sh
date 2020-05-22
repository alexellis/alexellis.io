#!/bin/sh

set -e

export DATE=2020-05-22

TAG="alexellis2/alexellisio:$DATE"

docker build -t $TAG . && docker push $TAG
