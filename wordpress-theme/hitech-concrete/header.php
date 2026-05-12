<?php
/**
 * Header Template
 *
 * @package Hitech_Concrete
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?php bloginfo('description'); ?>">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
    <!-- Top Bar -->
    <div class="header-top-bar">
        <div class="container">
            <div class="top-bar-content">
                <div class="contact-info">
                    <a href="tel:+919839001970" class="contact-link">
                        <span class="icon">📞</span>
                        <span>+91 9839001970</span>
                    </a>
                    <a href="tel:+916390164990" class="contact-link">
                        <span class="icon">📞</span>
                        <span>+91 6390164990</span>
                    </a>
                    <a href="mailto:hitecht09@gmail.com" class="contact-link">
                        <span class="icon">✉️</span>
                        <span>hitecht09@gmail.com</span>
                    </a>
                </div>
                <div class="tagline">
                    Since 2004 - Quality You Can Trust
                </div>
            </div>
        </div>
    </div>

    <!-- Main Navigation -->
    <nav class="main-navigation">
        <div class="container">
            <div class="nav-wrapper">
                <!-- Logo -->
                <div class="site-logo">
                    <?php
                    if (has_custom_logo()) {
                        the_custom_logo();
                    } else {
                        ?>
                        <a href="<?php echo esc_url(home_url('/')); ?>">
                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hitech-logo.png" alt="Hitech Concrete Product">
                        </a>
                        <?php
                    }
                    ?>
                </div>

                <!-- Desktop Menu -->
                <div class="desktop-menu">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'menu_class'     => 'nav-menu',
                        'container'      => false,
                        'fallback_cb'    => 'hitech_concrete_fallback_menu',
                    ));
                    ?>
                    <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary">Get a Quote</a>
                </div>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" id="mobileMenuToggle" aria-label="Toggle Menu">
                    <span class="hamburger"></span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobileMenu">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class'     => 'mobile-nav-menu',
                    'container'      => false,
                    'fallback_cb'    => 'hitech_concrete_fallback_menu',
                ));
                ?>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary btn-block">Get a Quote</a>
            </div>
        </div>
    </nav>
</header>

<?php
/**
 * Fallback menu if no menu is set
 */
function hitech_concrete_fallback_menu() {
    ?>
    <ul class="nav-menu">
        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Us</a></li>
        <li><a href="<?php echo esc_url(home_url('/products')); ?>">Products</a></li>
        <li><a href="<?php echo esc_url(home_url('/contact')); ?>">Contact</a></li>
    </ul>
    <?php
}
?>
