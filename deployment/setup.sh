#!/bin/bash

tput reset

BLUE='\033[0;34m'
NC='\033[0m'

echo ""
printf "${BLUE}You have initiated a deploy${NC}\n"
echo "---------------------------"
echo ""
printf "${BLUE}Do you want to continue? $(tput bold)(y/n): ${NC}"
read continue

if [[ "$continue" =~ ^[Yy]$ ]]; then
    echo ""
else
    echo "Til next time"
    echo ""
    exit 0
fi

inventory="inventory.ini"

# Check if the file exists
if [ -e "$inventory" ]; then
    printf "${BLUE}File '$inventory' found. Do you wish to deploy to $(tput bold)(y/n)?\n${NC}"
    echo ""
    cat "$inventory"
    echo ""
    read confirm
    if [[ "$confirm" =~ ^[Yy]$ ]]; then
    echo ""
    else
        printf "${BLUE}Please delete the file or change it's content before retrying.\n"
        echo ""
        exit 0
    fi
else
    echo "No '$inventory' file found."
    printf "${BLUE}Please enter the remote host name (or IP) ro deploy to: ${NC}"
    read host
    touch "$inventory"
    echo "[public_ip]" > "$inventory"
    echo "$host" >> "$inventory"
fi

