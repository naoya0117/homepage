#!/bin/bash

USERNAME="admin"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_DIR="${SCRIPT_DIR}/.."

cd $PROJECT_DIR

sudo -v
if [ $? -ne 0 ]; then
    echo "You must have sudo privileges to run this script"
    exit 1
fi

read -p "Enter the email for admin: " email
read -p "Enter the password for admin: " -s password

sudo docker compose exec -T backend php artisan tinker << EOF
\$user = new App\\Models\\User;
\$user->name = "$USERNAME";
\$user->email = "$email";
\$user->password = Hash::make("$password");
\$user->save();
EOF

if [ $? -ne 0 ]; then
    echo "Failed to add admin"
    exit 1
fi
