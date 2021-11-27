#!/bin/sh

set -e

TAG="alexellis2/alexellisio:$DATE"

docker pull $TAG

docker rm -f alexellisio

docker run --name alexellisio \
 -p 127.0.0.1:3000:3000 \
 --restart=always \
 -d ${TAG}
