<?php
/**
 * Register ACF blocks
 *
 * @package acme-acf-blocks
 */

/**
 * Init ACF blocks.
 */
function acme_acf_init_block_types()
{

    // Check function exists.
    if (function_exists('acf_register_block_type')) {

        // Register a Call to Action block.
        acf_register_block_type(
            array(
            'name'            => 'acme-call-to-action',
            'title'           => __('Call to Action'),
            'description'     => __('Call the viewer to action!'),
            'icon'            => 'admin-comments',
            'keywords'        => array( 'cta', 'call' ),
            'render_template' => plugin_dir_path(__FILE__) . '/template-parts/blocks/call-to-action.php',
            'mode'            => 'edit',
            'supports'        => array(
            'align' => false,
            'mode'  => false,
            ),
            )
        );

        // Register a Product Features block.
        acf_register_block_type(
            array(
            'name'            => 'acme-product-features',
            'title'           => __('Product Features'),
            'description'     => __('Show off the product features!'),
            'icon'            => 'excerpt-view',
            'keywords'        => array( 'product', 'features' ),
            'render_template' => plugin_dir_path(__FILE__) . '/template-parts/blocks/product-features.php',
            'mode'            => 'edit',
            'supports'        => array(
            'align' => false,
            'mode'  => false,
            ),
            )
        );
    }
}

add_action('acf/init', 'acme_acf_init_block_types');
