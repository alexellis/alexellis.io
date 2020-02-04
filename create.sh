#!/bin/sh

set -e

TAG="alexellis2/alexellisio:2020-02-04"

docker pull $TAG

docker rm -f alexellisio

docker run --name alexellisio \
 -p 3000:3000 \
 --restart=always \
 -d ${TAG}
