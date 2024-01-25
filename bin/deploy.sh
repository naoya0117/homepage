#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="${SCRIPT_DIR}/../"
BRANCH="main"

sudo -v
if [ $? -ne 0 ]; then
    echo "You must have sudo privileges to run this script"
    exit 1
fi

echo "Deploying project from ${PROJECT_DIR}"
echo "Pulling latest changes from git"
git pull origin "${BRANCH}"

echo "updating docker-compose.yml"
rm -f "${PROJECT_DIR}/docker-compose.yml"
ln -s "${PROJECT_DIR}/production.yml" "${PROJECT_DIR}/docker-compose.yml"

echo "Building and deploying docker containers"
sudo docker compose up -d --build

echo "Waiting for containers to start"
sleep 20

sudo chown -R $(whoami):33 
sudo docker compose exec backend php artisan key:generate --force
