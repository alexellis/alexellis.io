#!/bin/sh

docker rm -f alexellisio

TAG="alexellis2/alexellisio:2019-06-11"

docker run --name alexellisio \
 -p 3000:3000 \
 --restart=always \
 -d ${TAG}
