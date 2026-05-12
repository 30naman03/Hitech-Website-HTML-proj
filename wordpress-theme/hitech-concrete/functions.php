<?php
/**
 * Hitech Concrete Product Theme Functions
 *
 * @package Hitech_Concrete
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme Setup
 */
function hitech_concrete_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'hitech-concrete'),
        'footer' => __('Footer Menu', 'hitech-concrete'),
    ));
}
add_action('after_setup_theme', 'hitech_concrete_setup');

/**
 * Enqueue scripts and styles
 */
function hitech_concrete_scripts() {
    // Main stylesheet
    wp_enqueue_style('hitech-concrete-style', get_stylesheet_uri(), array(), '1.0.0');
    wp_enqueue_style('hitech-concrete-main', get_template_directory_uri() . '/assets/css/main.css', array(), '1.0.0');
    
    // Main JavaScript
    wp_enqueue_script('hitech-concrete-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0.0', true);
    
    // Add inline WhatsApp number
    wp_localize_script('hitech-concrete-main', 'hitechData', array(
        'whatsapp' => '916390164990',
        'ajaxurl' => admin_url('admin-ajax.php'),
    ));
}
add_action('wp_enqueue_scripts', 'hitech_concrete_scripts');

/**
 * Register widget areas
 */
function hitech_concrete_widgets_init() {
    register_sidebar(array(
        'name'          => __('Footer Widget Area', 'hitech-concrete'),
        'id'            => 'footer-1',
        'description'   => __('Add widgets here to appear in your footer.', 'hitech-concrete'),
        'before_widget' => '<div class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'hitech_concrete_widgets_init');

/**
 * Custom Post Type for Products (Optional - can use pages instead)
 */
function hitech_concrete_register_products_post_type() {
    $labels = array(
        'name'               => 'Products',
        'singular_name'      => 'Product',
        'add_new'            => 'Add New',
        'add_new_item'       => 'Add New Product',
        'edit_item'          => 'Edit Product',
        'new_item'           => 'New Product',
        'view_item'          => 'View Product',
        'search_items'       => 'Search Products',
        'not_found'          => 'No products found',
        'not_found_in_trash' => 'No products found in trash',
    );

    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'has_archive'         => true,
        'publicly_queryable'  => true,
        'query_var'           => true,
        'rewrite'             => array('slug' => 'products'),
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'supports'            => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon'           => 'dashicons-building',
        'show_in_rest'        => true,
    );

    register_post_type('product', $args);
}
add_action('init', 'hitech_concrete_register_products_post_type');

/**
 * Add custom image sizes
 */
add_image_size('product-thumbnail', 400, 300, true);
add_image_size('product-large', 1200, 800, true);

/**
 * Customize excerpt length
 */
function hitech_concrete_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'hitech_concrete_excerpt_length');

/**
 * Add async/defer to scripts
 */
function hitech_concrete_defer_scripts($tag, $handle, $src) {
    $defer_scripts = array('hitech-concrete-main');
    
    if (in_array($handle, $defer_scripts)) {
        return str_replace('<script ', '<script defer ', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'hitech_concrete_defer_scripts', 10, 3);

/**
 * Custom logo support
 */
function hitech_concrete_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'hitech_concrete_custom_logo_setup');
