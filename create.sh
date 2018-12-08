#!/bin/sh

docker rm -f alexellisio

docker run --name alexellisio \
 -p 3000:3000 \
 --restart=always \
 -d alexellis2/alexellisio:08-12-2018

 #  -d alexellis2/alexellisio:49b83593cc5c3fcfc35a9082339574f2b57afa5c



