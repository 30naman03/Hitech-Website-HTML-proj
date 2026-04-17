# Hitech Concrete Product - Deployment Guide

## 🚀 Deployment Options

### Option 1: Emergent Platform (Recommended)
The application is already configured for Emergent deployment.

**Steps:**
1. Click "Deploy" button in Emergent dashboard
2. Application will be automatically deployed
3. Use the provided URL to access your live website

### Option 2: Vercel (Frontend) + Railway (Backend)

#### Frontend Deployment to Vercel

1. **Prepare Frontend**
```bash
cd /app/frontend
yarn build
```

2. **Deploy to Vercel**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

3. **Set Environment Variables in Vercel Dashboard**
```
REACT_APP_BACKEND_URL=<your-backend-url>
```

#### Backend Deployment to Railway

1. **Prepare Backend**
- Ensure `requirements.txt` is up to date
- Create `Procfile` in backend directory:
```
web: uvicorn server:app --host 0.0.0.0 --port $PORT
```

2. **Deploy to Railway**
- Connect your GitHub repository
- Select backend directory
- Set environment variables:
```
MONGO_URL=<mongodb-atlas-url>
DB_NAME=hitech_concrete
```

### Option 3: Full Stack on Render

1. **Deploy Backend**
- Create new Web Service on Render
- Connect GitHub repo
- Build Command: `cd backend && pip install -r requirements.txt`
- Start Command: `cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT`
- Environment Variables:
  ```
  MONGO_URL=<mongodb-atlas-url>
  DB_NAME=hitech_concrete
  ```

2. **Deploy Frontend**
- Create new Static Site on Render
- Build Command: `cd frontend && yarn install && yarn build`
- Publish Directory: `frontend/build`
- Environment Variables:
  ```
  REACT_APP_BACKEND_URL=<your-backend-url>
  ```

### Option 4: Traditional VPS (DigitalOcean, AWS EC2, etc.)

#### Server Setup (Ubuntu 20.04+)

1. **Install Dependencies**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Yarn
npm install -g yarn

# Install Python
sudo apt install -y python3.9 python3-pip

# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod
```

2. **Clone and Setup Project**
```bash
# Clone repository
git clone <your-repo-url> /var/www/hitech
cd /var/www/hitech

# Backend setup
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt

# Frontend setup
cd ../frontend
yarn install
yarn build
```

3. **Configure Nginx**
```nginx
# /etc/nginx/sites-available/hitech

server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/hitech/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **Enable Site**
```bash
sudo ln -s /etc/nginx/sites-available/hitech /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. **Setup Process Manager (PM2)**
```bash
# Install PM2
npm install -g pm2

# Start Backend
cd /var/www/hitech/backend
pm2 start "uvicorn server:app --host 0.0.0.0 --port 8001" --name hitech-backend

# Save PM2 config
pm2 save
pm2 startup
```

6. **SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 🗄️ Database Setup

### MongoDB Atlas (Recommended for Production)

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Create free cluster

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<password>` with your database password

3. **Whitelist IP Addresses**
   - Add your server IP
   - Or use `0.0.0.0/0` for all IPs (less secure)

4. **Update Environment Variables**
```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority
DB_NAME=hitech_concrete
```

## 🔐 Security Checklist

- [ ] Environment variables are not committed to Git
- [ ] MongoDB connection uses authentication
- [ ] CORS is configured for specific domains (not *)
- [ ] SSL/HTTPS is enabled
- [ ] Rate limiting is implemented
- [ ] Input validation is in place
- [ ] Error messages don't expose sensitive information

## 🔄 CI/CD Setup (Optional)

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        working-directory: ./frontend
```

## 📊 Monitoring

### Frontend
- **Vercel Analytics**: Built-in
- **Google Analytics**: Add to `public/index.html`

### Backend
- **Railway Metrics**: Built-in dashboard
- **Sentry**: Error tracking
- **LogDNA**: Log management

## 🔧 Environment Variables Summary

### Production Frontend
```env
REACT_APP_BACKEND_URL=https://api.your-domain.com
```

### Production Backend
```env
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=hitech_concrete
PORT=8001
```

## 🧪 Pre-Deployment Checklist

- [ ] All environment variables are set
- [ ] MongoDB connection is working
- [ ] Frontend build completes without errors
- [ ] API endpoints are accessible
- [ ] Contact form submits successfully
- [ ] Images load correctly
- [ ] Phone numbers and links work
- [ ] WhatsApp button redirects correctly
- [ ] Google Maps link opens
- [ ] LinkedIn link works
- [ ] Responsive design tested on mobile
- [ ] All product pages load
- [ ] Navigation works correctly

## 📈 Post-Deployment Tasks

1. **Test All Features**
   - Submit test inquiry
   - Click all navigation links
   - Test on mobile devices
   - Verify contact information

2. **Setup Monitoring**
   - Configure uptime monitoring
   - Setup error tracking
   - Enable analytics

3. **Backup Strategy**
   - MongoDB Atlas automatic backups
   - Git repository backups
   - Environment variables backup

4. **Performance Optimization**
   - Enable CDN for images
   - Configure caching
   - Optimize database queries

## 🆘 Troubleshooting

### Frontend not loading
- Check `REACT_APP_BACKEND_URL` environment variable
- Verify build completed successfully
- Check browser console for errors

### API not responding
- Verify backend is running
- Check MongoDB connection
- Review CORS settings
- Check server logs

### Database connection failed
- Verify MongoDB URL is correct
- Check IP whitelist in MongoDB Atlas
- Ensure database user has proper permissions

### Images not loading
- Verify images are in `/public` directory
- Check image paths are correct
- Ensure images are included in build

## 📞 Support

For deployment assistance:
- **Email**: hitecht09@gmail.com
- **Phone**: +91 9839001970

---

**Last Updated**: April 2026
**Version**: 1.0.0
