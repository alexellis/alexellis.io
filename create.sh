#!/bin/sh

docker rm -f alexellisio

docker run --name alexellisio \
 -p 3000:3000 \
 --restart=always \
 -d alexellis2/alexellisio:24-02-2019
