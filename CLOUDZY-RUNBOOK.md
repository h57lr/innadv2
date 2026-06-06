# Cloudzy VPS Deployment Runbook

## VPS Details

| Field | Value |
|-------|-------|
| Provider | Cloudzy |
| IPv4 | `144.172.106.197` |
| Username | `root` |
| Password | `Go9VpW7Fi43eFe` |
| OS | Ubuntu 24.04 |
| RAM | 512 MB (1 GB swap added) |

---

## 1. Connect Via SSH

**From Windows (PowerShell):**

```powershell
ssh root@144.172.106.197
# Enter password: Go9VpW7Fi43eFe
```

---

## 2. First-Time Server Setup (one-time)

Run these commands once when the VPS is fresh:

```bash
# Update system
apt update && apt upgrade -y
apt install -y git curl nginx rsync

# Add 1 GB swap (prevents OOM during npm builds)
fallocate -l 1G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' >> /etc/fstab

# Install Node.js 22 LTS
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt install -y nodejs

# Install PM2 globally
npm install -g pm2

# Create app directory
mkdir -p /var/www/[app-name]
```

---

## 3. Upload A New Project (from local Windows)

On your **local Windows machine**, create an archive and upload it:

```powershell
# Replace [app-name] and path accordingly
cd C:\path\to\your\project

# Create archive excluding common dirs
tar -czf $env:TEMP\project.tar.gz --exclude=node_modules --exclude=.next --exclude=.git --exclude=.opencode --exclude='.env*' .

# Upload to VPS (using sshpass installed via winget)
$sshpass = "C:\Users\Surface\AppData\Local\Microsoft\WinGet\Packages\xhcoding.sshpass-win32_Microsoft.Winget.Source_8wekyb3d8bbwe\sshpass.exe"
& $sshpass -p "Go9VpW7Fi43eFe" scp -o StrictHostKeyChecking=accept-new $env:TEMP\project.tar.gz root@144.172.106.197:/var/www/[app-name].tar.gz

# Extract on VPS
& $sshpass -p "Go9VpW7Fi43eFe" ssh -o StrictHostKeyChecking=accept-new root@144.172.106.197 "cd /var/www/[app-name] && tar -xzf /var/www/[app-name].tar.gz && rm /var/www/[app-name].tar.gz"

# Clean up local archive
Remove-Item $env:TEMP\project.tar.gz -Force
```

---

## 4. Install Dependencies & Build

```bash
cd /var/www/[app-name]
npm ci
npm run build
```

---

## 5. Start With PM2

```bash
cd /var/www/[app-name]

# Delete old process if exists
pm2 delete [app-name] 2>/dev/null

# Start app (adjust command for your framework)
pm2 start npm --name [app-name] -- start -- -p 3000 -H 127.0.0.1
pm2 save

# Enable startup on reboot
pm2 startup
# → copy & run the sudo command it prints
pm2 save
```

---

## 6. Configure Nginx Reverse Proxy

```bash
# Write config via base64 to avoid escaping issues
echo 'c2VydmVyIHsKICAgIGxpc3RlbiA4MDsKICAgIHNlcnZlcl9uYW1lIF87CiAgICBsb2NhdGlvbiAvIHsKICAgICAgICBwcm94eV9wYXNzIGh0dHA6Ly8xMjcuMC4wLjE6MzAwMDsKICAgICAgICBwcm94eV9odHRwX3ZlcnNpb24gMS4xOwogICAgICAgIHByb3h5X3NldF9oZWFkZXIgSG9zdCAkaG9zdDsKICAgICAgICBwcm94eV9zZXRfaGVhZGVyIFgtUmVhbC1JUCAkcmVtb3RlX2FkZHI7CiAgICAgICAgcHJveHlfc2V0X2hlYWRlciBYLUZvcndhcmRlZC1Gb3IgJHByb3h5X2FkZF94X2ZvcndhcmRlZF9mb3I7CiAgICAgICAgcHJveHlfc2V0X2hlYWRlciBYLUZvcndhcmRlZC1Qcm90byAkc2NoZW1lOwogICAgICAgIHByb3h5X3NldF9oZWFkZXIgVXBncmFkZSAkaHR0cF91cGdyYWRlOwogICAgICAgIHByb3h5X3NldF9oZWFkZXIgQ29ubmVjdGlvbiAidXBncmFkZSI7CiAgICB9Cn0=' | base64 -d > /etc/nginx/sites-available/[app-name]

# Enable site
ln -sf /etc/nginx/sites-available/[app-name] /etc/nginx/sites-enabled/[app-name]
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl restart nginx
```

If you want a custom domain instead of `_`, edit the config:

```bash
sed -i 's/server_name _;/server_name yourdomain.com www.yourdomain.com;/' /etc/nginx/sites-available/[app-name]
nginx -t && systemctl reload nginx
```

---

## 7. SSL With Certbot (after domain DNS is set)

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d yourdomain.com -d www.yourdomain.com
certbot renew --dry-run
```

---

## 8. Verify Deployment

```bash
pm2 status
systemctl status nginx --no-pager
curl -I http://127.0.0.1:3000
curl -I http://144.172.106.197
```

---

## 9. Deploy Updates

**From your local Windows machine:**

```powershell
# Build locally first, then upload
cd C:\path\to\your\project
npm run build

# Upload using same tar+scp pattern (section 3)
# Then on VPS:
$sshpass = "C:\Users\Surface\AppData\Local\Microsoft\WinGet\Packages\xhcoding.sshpass-win32_Microsoft.Winget.Source_8wekyb3d8bbwe\sshpass.exe"
& $sshpass -p "Go9VpW7Fi43eFe" ssh -o StrictHostKeyChecking=accept-new root@144.172.106.197 "cd /var/www/[app-name] && npm ci && npm run build && pm2 restart [app-name] && pm2 save"
```

---

## 10. Useful Commands

| Task | Command |
|------|---------|
| SSH into VPS | `ssh root@144.172.106.197` |
| Check PM2 status | `pm2 status` |
| View app logs | `pm2 logs [app-name]` |
| Restart app | `pm2 restart [app-name]` |
| Stop app | `pm2 stop [app-name]` |
| Test Nginx config | `nginx -t && systemctl reload nginx` |
| Nginx logs | `tail -f /var/log/nginx/access.log` |
| Monitor memory | `free -h` |
| Check disk space | `df -h` |
| Reboot VPS | `reboot` (from Cloudzy dashboard if SSH is dead) |

---

## Tips

- **Low memory VPS (512 MB):** Always ensure swap is enabled before running `npm ci` or `npm run build`. Without swap, the build process will be killed by OOM.
- **First-time setup** (section 2) only needs to run once. For subsequent projects, skip straight to sections 3–6.
- **Port conflicts:** PM2 should bind to `127.0.0.1:3000` (internal). Nginx on `0.0.0.0:80` (public). Never expose Node directly to the internet.
- **Multiple apps:** Use different PM2 names, different local ports (3001, 3002, etc.), and different Nginx server configs.
