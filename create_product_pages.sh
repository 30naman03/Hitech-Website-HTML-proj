#!/bin/bash

# Create product pages directory
mkdir -p /app/html-website/products

# Product 1: Automatic Paver Blocks
cat > /app/html-website/products/automatic-paver-blocks.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatic Paver Blocks - Hitech Concrete Product</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <div class="header-top-bar">
            <div class="container">
                <div class="contact-info">
                    <a href="tel:+919839001970" class="contact-link"><span>📞</span><span>+91 9839001970</span></a>
                    <a href="tel:+916390164990" class="contact-link"><span>📞</span><span>+91 6390164990</span></a>
                    <a href="mailto:hitecht09@gmail.com" class="contact-link"><span>✉️</span><span>hitecht09@gmail.com</span></a>
                </div>
                <div class="tagline">Since 2004 - Quality You Can Trust</div>
            </div>
        </div>
        <nav class="main-nav">
            <div class="container">
                <div class="nav-wrapper">
                    <div class="site-logo"><a href="../index.html"><img src="../images/hitech-logo.png" alt="Hitech Concrete Product"></a></div>
                    <ul class="nav-menu">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../about.html">About Us</a></li>
                        <li><a href="../products.html" class="active">Products</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle"><span class="hamburger"></span></button>
                </div>
                <div class="mobile-menu" id="mobileMenu">
                    <a href="../index.html">Home</a>
                    <a href="../about.html">About Us</a>
                    <a href="../products.html">Products</a>
                    <a href="../contact.html">Contact</a>
                </div>
            </div>
        </nav>
    </header>

    <section style="padding: 5rem 0;">
        <div class="container">
            <a href="../products.html" style="color: var(--color-primary); display: inline-block; margin-bottom: 2rem;">&larr; Back to Products</a>
            
            <div class="grid grid-cols-2" style="gap: 3rem; margin-bottom: 4rem;">
                <div>
                    <img src="../images/products/auto-paver-park.jpg" alt="Automatic Paver Blocks" class="rounded-lg shadow-xl" style="width: 100%; height: 400px; object-fit: cover;">
                </div>
                <div>
                    <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1rem;">Automatic Paver Blocks</h1>
                    <p style="font-size: 1.125rem; color: var(--color-gray-600); margin-bottom: 2rem; line-height: 1.8;">
                        High-strength interlocking paver blocks manufactured using state-of-the-art fully automatic machinery. Perfect for driveways, pathways, parking areas, and landscaping projects.
                    </p>
                    
                    <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">Key Features</h3>
                    <ul class="feature-list">
                        <li><svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg><span>Fully Automatic Production</span></li>
                        <li><svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg><span>High Compressive Strength (35+ MPa)</span></li>
                        <li><svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg><span>Interlocking Design</span></li>
                        <li><svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg><span>Available in Multiple Colors</span></li>
                        <li><svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg><span>Weather Resistant</span></li>
                    </ul>
                    
                    <div style="margin-top: 2rem;">
                        <a href="tel:+919839001970" class="btn btn-primary">Call for Quote</a>
                    </div>
                </div>
            </div>

            <h3 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem;">Applications</h3>
            <div class="grid grid-cols-4" style="margin-bottom: 4rem;">
                <div class="card"><div class="card-content"><p>Residential Driveways</p></div></div>
                <div class="card"><div class="card-content"><p>Commercial Parking</p></div></div>
                <div class="card"><div class="card-content"><p>Pathways & Sidewalks</p></div></div>
                <div class="card"><div class="card-content"><p>Garden Landscaping</p></div></div>
            </div>

            <h3 style="font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem;">Product Gallery</h3>
            <div class="grid grid-cols-3" style="gap: 1rem;">
                <img src="../images/products/auto-paver-park.jpg" class="rounded-lg shadow-lg" style="width: 100%; height: 250px; object-fit: cover;">
                <img src="../images/products/auto-paver-road.jpeg" class="rounded-lg shadow-lg" style="width: 100%; height: 250px; object-fit: cover;">
                <img src="../images/products/auto-paver-pathway.jpeg" class="rounded-lg shadow-lg" style="width: 100%; height: 250px; object-fit: cover;">
            </div>
        </div>
    </section>

    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <img src="../images/hitech-logo.png" alt="Hitech Concrete Product" class="footer-logo">
                    <p>Leading manufacturer of high-quality precast concrete products since 2004.</p>
                </div>
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-menu">
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="../about.html">About Us</a></li>
                        <li><a href="../products.html">Products</a></li>
                        <li><a href="../contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Our Products</h3>
                    <ul class="footer-menu">
                        <li><a href="../products.html">Automatic Paver Blocks</a></li>
                        <li><a href="../products.html">RCC Pipes</a></li>
                        <li><a href="../products.html">Rubbermold Pavers</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <ul class="footer-contact">
                        <li><span>📞</span><div><a href="tel:+919839001970">+91 9839001970</a><br><a href="tel:+916390164990">+91 6390164990</a></div></li>
                        <li><span>✉️</span><a href="mailto:hitecht09@gmail.com">hitecht09@gmail.com</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Hitech Concrete Product. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/916390164990?text=Hello!%20I%20am%20interested%20in%20your%20concrete%20products." class="whatsapp-btn" target="_blank">
        <svg width="28" height="28" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>

    <script src="../js/main.js"></script>
</body>
</html>
EOF

echo "Created automatic-paver-blocks.html"
