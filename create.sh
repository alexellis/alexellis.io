#!/bin/sh

docker rm -f alexellisio

TAG="alexellis2/alexellisio:2019-08-16"

docker run --name alexellisio \
 -p 3000:3000 \
 --restart=always \
 -d ${TAG}
