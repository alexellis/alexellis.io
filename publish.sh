#!/bin/sh

set -e

export DATE=2020-03-18

TAG="alexellis2/alexellisio:$DATE"

docker build -t $TAG . && docker push $TAG
