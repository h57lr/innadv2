# Deployment Guide

This project is a Next.js app.

Production build command:

```bash
npm run build
```

Production start command:

```bash
npm run start
```

For PM2 behind Nginx, run the app on localhost port `3000`:

```bash
pm2 start npm --name enad-portfolio -- start -- -p 3000 -H 127.0.0.1
```

## 1. Point DNS To The VPS

In your domain DNS provider, create these records. Replace `example.com` with your real domain and `YOUR_VPS_IP` with the Cloudzy VPS public IP.

```text
Type  Name  Value        TTL
A     @     YOUR_VPS_IP  Auto
A     www   YOUR_VPS_IP  Auto
```

Wait until DNS resolves:

```bash
dig +short example.com
dig +short www.example.com
```

## 2. Connect To Ubuntu VPS

From your local machine:

```bash
ssh root@YOUR_VPS_IP
```

Update Ubuntu:

```bash
apt update && apt upgrade -y
```

Create a deploy user:

```bash
adduser deploy
usermod -aG sudo deploy
rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy
su - deploy
```

## 3. Install Node.js, Git, Nginx, PM2

Install Node.js 22 LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs git nginx
```

Confirm versions:

```bash
node -v
npm -v
git --version
nginx -v
```

Install PM2 globally:

```bash
sudo npm install -g pm2
```

## 4. Clone From GitHub

Create the app directory:

```bash
sudo mkdir -p /var/www/enad-portfolio
sudo chown deploy:deploy /var/www/enad-portfolio
```

Clone the repository. Replace `GITHUB_REPO_URL` with your GitHub repository URL.

```bash
git clone GITHUB_REPO_URL /var/www/enad-portfolio
cd /var/www/enad-portfolio
```

Install dependencies and build:

```bash
npm ci
npm run build
```

## 5. Start With PM2

Start the production server:

```bash
cd /var/www/enad-portfolio
pm2 start npm --name enad-portfolio -- start -- -p 3000 -H 127.0.0.1
pm2 save
```

Enable PM2 startup after reboot:

```bash
pm2 startup systemd -u deploy --hp /home/deploy
```

PM2 will print a `sudo env ...` command. Copy and run that command exactly, then run:

```bash
pm2 save
```

Check the app locally on the VPS:

```bash
curl -I http://127.0.0.1:3000
pm2 status
pm2 logs enad-portfolio
```

## 6. Configure Nginx

Create the Nginx site config. Replace `example.com` with your real domain.

```bash
sudo nano /etc/nginx/sites-available/enad-portfolio
```

Paste this config:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name example.com www.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/enad-portfolio /etc/nginx/sites-enabled/enad-portfolio
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Allow web traffic through the firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw --force enable
sudo ufw status
```

Test the domain before SSL:

```bash
curl -I http://example.com
```

## 7. Install SSL With Certbot

Install Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
```

Request and install the SSL certificate:

```bash
sudo certbot --nginx -d example.com -d www.example.com
```

Test renewal:

```bash
sudo certbot renew --dry-run
```

Verify HTTPS:

```bash
curl -I https://example.com
```

## 8. Deploy Future Updates

After pushing changes to GitHub, SSH into the VPS and run:

```bash
cd /var/www/enad-portfolio
git pull origin main
npm ci
npm run build
pm2 restart enad-portfolio
pm2 save
```

If your GitHub default branch is `master`, use this instead:

```bash
git pull origin master
```

## Useful Commands

Check PM2 status:

```bash
pm2 status
```

View app logs:

```bash
pm2 logs enad-portfolio
```

Restart the app:

```bash
pm2 restart enad-portfolio
```

Reload Nginx after config changes:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

Check Nginx logs:

```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```
