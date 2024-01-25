#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="${SCRIPT_DIR}/.."

cd $PROJECT_DIR

sudo -v 
if [ $? -ne 0 ]; then
    echo "You must have sudo privileges to run this script"
    exit 1
fi

read -p "Enter the email of the user you want to remove: " email
sudo docker compose exec -T backend php artisan tinker << EOF
\$user = App\\Models\\User::where('email', '$email')->first();
\$user->delete();
EOF

if [ $? -ne 0 ]; then
    echo "failed to remove user"
    exit 1
fi
