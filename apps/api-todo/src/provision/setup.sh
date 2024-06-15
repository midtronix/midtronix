#!/bin/bash

# Update packages
sudo apt-get update

# Install Node.js LTS and npm
curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Navigate to the app directory
cd /vagrant/app

# Install app dependencies
npm install

# Start the Node.js app with PM2
pm2 start index.js --name "my-app"

# Save PM2 process list and restart on boot
pm2 save
pm2 startup

# Additional configurations or setup steps if needed

# Optional: Clean up packages no longer required
sudo apt-get autoremove -y
