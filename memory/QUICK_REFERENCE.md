# Hitech Concrete Product - Quick Reference Guide

## 🚀 Quick Start Commands

### Backend
```bash
cd /app/backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Frontend
```bash
cd /app/frontend
yarn start
```

## 📞 Contact Details

### Phone Numbers
- **Primary**: +91 9839001970
- **Secondary**: +91 6390164990
- **WhatsApp**: +91 6390164990

### Other Contacts
- **Email**: hitecht09@gmail.com
- **Address**: Hitech Concrete Product, Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003

### Social Media
- **LinkedIn**: https://www.linkedin.com/company/hitech-concrete-product/?originalSubdomain=in
- **Google Maps**: https://www.google.com/maps/place/Hitech+Concrete+Product/@26.9003149,81.0958083,888m/

## 🌐 URLs

### Development
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:8001
- **Backend API**: http://localhost:8001/api

### Production
- Update in `.env` files when deploying

## 📦 Products

1. Automatic Paver Blocks
2. RCC Pipes (Hume Pipes)
3. Rubbermold Paver Blocks
4. Kerb Stones
5. Saucer and Drain Covers
6. Manhole Covers
7. Precast Boundary Walls

## 🗄️ Database

- **Type**: MongoDB
- **Database Name**: hitech_concrete
- **Collection**: inquiries

## 🔑 Environment Variables

### Backend (.env)
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=hitech_concrete
```

### Frontend (.env)
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 📁 Key Files

### Backend
- `/app/backend/server.py` - Main FastAPI application
- `/app/backend/requirements.txt` - Python dependencies
- `/app/backend/.env` - Backend environment variables

### Frontend
- `/app/frontend/src/App.js` - Main React component
- `/app/frontend/src/pages/` - All page components
- `/app/frontend/src/components/` - Reusable components
- `/app/frontend/public/` - Static assets and images
- `/app/frontend/.env` - Frontend environment variables

## 🎨 Design System

### Colors
- Primary: Yellow (#EAB308)
- Secondary: Gray-900
- Accent: Yellow-400

### Key Components
- Navbar (Header.js)
- Footer
- WhatsApp Button
- Product Cards
- Contact Form

## 🔄 Common Tasks

### Add New Product
1. Create product page in `/app/frontend/src/pages/products/`
2. Add route in `/app/frontend/src/App.js`
3. Update ProductsPage.js catalog
4. Add product images to `/app/frontend/public/products/`

### Update Contact Info
- Header: `/app/frontend/src/components/Header.js`
- Footer: `/app/frontend/src/components/Footer.js`
- Contact Page: `/app/frontend/src/pages/ContactPage.js`
- WhatsApp: `/app/frontend/src/components/WhatsAppButton.js`

### Restart Services
```bash
# If using supervisor
sudo supervisorctl restart frontend
sudo supervisorctl restart backend

# Check status
sudo supervisorctl status
```

## 🧪 Testing

### Check API
```bash
curl http://localhost:8001/api/inquiries
```

### Submit Test Inquiry
```bash
curl -X POST http://localhost:8001/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91-9999999999",
    "product_interest": "Automatic Paver Blocks",
    "message": "Test inquiry"
  }'
```

## 📝 Important Notes

1. Always use `yarn` for frontend (not npm)
2. All backend routes must have `/api` prefix
3. Never hardcode URLs - always use environment variables
4. MongoDB `_id` must be excluded in queries: `{"_id": 0}`
5. WhatsApp number format: country code without '+' (916390164990)

## 🏢 Company Timeline

- 2004: Established
- 2005: IS 458:2003 Certification
- 2015: 8+ Product Categories
- 2017: Vertical Casting Plant
- 2024: 500+ Clients
- 2025: Automatic Paver Plant
- 2026: Continued Innovation

## ✅ Quality Standards

- IS 458:2003 (RCC Pipes)
- IS Standards (Paver Blocks)
- Quality Assured Testing

---

**Last Updated**: April 2026
