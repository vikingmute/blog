#!/bin/bash

echo "Running gatsby to bulid codes"

rm -rf .cache && gatsby build

echo "pack all the files into gzip tar file"

tar cvfz public.tgz -C public .

echo "upload tgz file to VPS"

scp public.tgz root@165.227.51.89:/var/www/vikingz.me

echo "extract tgz file on VPS"

ssh root@165.227.51.89 "cd /var/www/vikingz.me && tar -xvf public.tgz"
