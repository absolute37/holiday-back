#!/bin/sh
DIR=`dirname $0`

docker rm -f holiday_db
echo "✅ Start docker ..."


docker-compose -f $DIR/docker-compose.yml up -d --build  holiday_db
