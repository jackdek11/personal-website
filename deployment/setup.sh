#!/bin/bash

tput reset

BLUE='\033[0;34m'
NC='\033[0m'

echo ""
printf "${BLUE}You have initiated a deploy${NC}\n"
echo "---------------------------"
echo ""
printf "${BLUE}Do you want to continue? $(tput bold)(y/n): ${NC}"
read response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo "You chose to continue."
else
    echo "Til next time"
    exit 0
fi

