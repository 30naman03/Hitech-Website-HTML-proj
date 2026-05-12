<?php
/**
 * Footer Template
 *
 * @package Hitech_Concrete
 */
?>

<footer class="site-footer">
    <div class="container">
        <div class="footer-content">
            <!-- Company Info -->
            <div class="footer-column">
                <div class="footer-logo">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hitech-logo.png" alt="Hitech Concrete Product">
                </div>
                <p class="footer-description">
                    Leading manufacturer of high-quality precast concrete products since 2004. We precast concrete with precision and excellence.
                </p>
            </div>

            <!-- Quick Links -->
            <div class="footer-column">
                <h3 class="footer-title">Quick Links</h3>
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class'     => 'footer-menu',
                    'container'      => false,
                    'fallback_cb'    => 'hitech_concrete_footer_fallback_menu',
                ));
                ?>
            </div>

            <!-- Products -->
            <div class="footer-column">
                <h3 class="footer-title">Our Products</h3>
                <ul class="footer-menu">
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Automatic Paver Blocks</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">RCC Pipes</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Rubbermold Pavers</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Kerb Stones</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Saucer Drain</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Manhole Covers</a></li>
                    <li><a href="<?php echo esc_url(home_url('/products')); ?>">Precast Boundary Walls</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div class="footer-column">
                <h3 class="footer-title">Contact Us</h3>
                <ul class="footer-contact">
                    <li class="contact-item">
                        <span class="icon">📞</span>
                        <div>
                            <a href="tel:+919839001970">+91 9839001970</a>
                            <a href="tel:+916390164990">+91 6390164990</a>
                        </div>
                    </li>
                    <li class="contact-item">
                        <span class="icon">✉️</span>
                        <a href="mailto:hitecht09@gmail.com">hitecht09@gmail.com</a>
                    </li>
                    <li class="contact-item">
                        <span class="icon">📍</span>
                        <a href="https://www.google.com/maps/place/Hitech+Concrete+Product/@26.9003149,81.0958083,888m/" target="_blank" rel="noopener">
                            Hitech Concrete Product, Village Mohammadpur Chowki, Post Safedabad, Barabanki -225003
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <p class="copyright">
                    © <?php echo date('Y'); ?> Hitech Concrete Product. All rights reserved. | Manufactured in accordance with IS Standards
                </p>
                <div class="social-links">
                    <a href="https://www.linkedin.com/company/hitech-concrete-product/?originalSubdomain=in" target="_blank" rel="noopener" aria-label="LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- WhatsApp Button -->
<a href="https://wa.me/916390164990?text=Hello!%20I%20am%20interested%20in%20your%20concrete%20products." 
   class="whatsapp-button" 
   target="_blank" 
   rel="noopener"
   aria-label="Contact us on WhatsApp">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
</a>

<?php wp_footer(); ?>
</body>
</html>

<?php
/**
 * Fallback footer menu
 */
function hitech_concrete_footer_fallback_menu() {
    ?>
    <ul class="footer-menu">
        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Us</a></li>
        <li><a href="<?php echo esc_url(home_url('/products')); ?>">Products</a></li>
        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
    </ul>
    <?php
}
?>
