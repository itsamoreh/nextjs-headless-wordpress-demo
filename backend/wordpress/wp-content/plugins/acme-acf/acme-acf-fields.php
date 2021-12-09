<?php
/**
 * Register ACF blocks
 *
 * @package acme-acf-blocks
 */

/**
 * Add ACF fields.
 */
if ( function_exists( 'acf_add_local_field_group' ) ) {
	acf_add_local_field_group(
		array(
			'key'                                   => 'group_6193566736e20',
			'title'                                 => 'Block: CTA',
			'fields'                                => array(
				array(
					'key'               => 'field_619361304b293',
					'label'             => 'Call To Action',
					'name'              => '',
					'type'              => 'message',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'message'           => 'Call the viewer to action!',
					'new_lines'         => 'wpautop',
					'esc_html'          => 0,
				),
				array(
					'key'               => 'field_619356b40ac11',
					'label'             => 'Heading (Question)',
					'name'              => 'headingQuestion',
					'type'              => 'text',
					'instructions'      => 'Enter the question part of the heading.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_619357000ac12',
					'label'             => 'Heading (Call)',
					'name'              => 'headingCall',
					'type'              => 'text',
					'instructions'      => 'Enter the call to action part of the heading.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_619357970ac13',
					'label'             => 'Primary CTA Button',
					'name'              => 'primaryCta',
					'type'              => 'link',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
				),
				array(
					'key'               => 'field_619357e00ac14',
					'label'             => 'Secondary CTA Button',
					'name'              => 'secondaryCta',
					'type'              => 'link',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
				),
			),
			'location'                              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/acme-call-to-action',
					),
				),
			),
			'menu_order'                            => 0,
			'position'                              => 'normal',
			'style'                                 => 'default',
			'label_placement'                       => 'top',
			'instruction_placement'                 => 'label',
			'hide_on_screen'                        => '',
			'active'                                => true,
			'description'                           => '',
			'show_in_rest'                          => 0,
			'show_in_graphql'                       => 1,
			'graphql_field_name'                    => 'blockCta',
			'map_graphql_types_from_location_rules' => 0,
			'graphql_types'                         => '',
		)
	);

	acf_add_local_field_group(
		array(
			'key'                                   => 'group_61a004367a22a',
			'title'                                 => 'Block: Feature Section',
			'fields'                                => array(
				array(
					'key'               => 'field_61a004b0b322d',
					'label'             => 'Sub Heading',
					'name'              => 'subHeading',
					'type'              => 'text',
					'instructions'      => 'Enter a sub heading.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_61a00462b322b',
					'label'             => 'Heading',
					'name'              => 'heading',
					'type'              => 'text',
					'instructions'      => 'Enter a heading',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_61a004c6b322e',
					'label'             => 'Body',
					'name'              => 'body',
					'type'              => 'textarea',
					'instructions'      => 'Enter some body content.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'default_value'     => '',
					'placeholder'       => '',
					'maxlength'         => '',
					'rows'              => 2,
					'new_lines'         => '',
				),
			),
			'location'                              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'all',
					),
				),
			),
			'menu_order'                            => 0,
			'position'                              => 'normal',
			'style'                                 => 'default',
			'label_placement'                       => 'top',
			'instruction_placement'                 => 'label',
			'hide_on_screen'                        => '',
			'active'                                => true,
			'description'                           => '',
			'show_in_rest'                          => 0,
			'show_in_graphql'                       => 1,
			'graphql_field_name'                    => 'blockCollections',
			'map_graphql_types_from_location_rules' => 0,
			'graphql_types'                         => '',
		)
	);

	acf_add_local_field_group(
		array(
			'key'                                   => 'group_619f0ee698706',
			'title'                                 => 'Block: Hero',
			'fields'                                => array(
				array(
					'key'               => 'field_619f0ef2ba9f6',
					'label'             => 'Heading (Main)',
					'name'              => 'headingMain',
					'type'              => 'text',
					'instructions'      => 'Enter the main heading text.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_619f0f61ba9f7',
					'label'             => 'Heading (Accent)',
					'name'              => 'headingAccent',
					'type'              => 'text',
					'instructions'      => 'Enter the accented heading text.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_619f1128ba9f8',
					'label'             => 'Body',
					'name'              => 'body',
					'type'              => 'textarea',
					'instructions'      => 'Enter the main body of the hero.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'maxlength'         => '',
					'rows'              => 2,
					'new_lines'         => '',
				),
				array(
					'key'               => 'field_619f115bba9f9',
					'label'             => 'Primary CTA Button',
					'name'              => 'primaryCta',
					'type'              => 'link',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
				),
				array(
					'key'               => 'field_619f117dba9fa',
					'label'             => 'Secondary CTA Button',
					'name'              => 'secondaryCta',
					'type'              => 'link',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
				),
				array(
					'key'               => 'field_619f1191ba9fb',
					'label'             => 'Image',
					'name'              => 'image',
					'type'              => 'image',
					'instructions'      => 'Choose an image for the hero.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'return_format'     => 'array',
					'preview_size'      => 'large',
					'library'           => 'all',
					'min_width'         => '',
					'min_height'        => '',
					'min_size'          => '',
					'max_width'         => '',
					'max_height'        => '',
					'max_size'          => '',
					'mime_types'        => '',
				),
			),
			'location'                              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/acme-hero',
					),
				),
			),
			'menu_order'                            => 0,
			'position'                              => 'normal',
			'style'                                 => 'default',
			'label_placement'                       => 'top',
			'instruction_placement'                 => 'label',
			'hide_on_screen'                        => '',
			'active'                                => true,
			'description'                           => '',
			'show_in_rest'                          => 0,
			'show_in_graphql'                       => 1,
			'graphql_field_name'                    => 'blockHero',
			'map_graphql_types_from_location_rules' => 0,
			'graphql_types'                         => '',
		)
	);

	acf_add_local_field_group(
		array(
			'key'                                   => 'group_6193d621a5566',
			'title'                                 => 'Block: Product Features',
			'fields'                                => array(
				array(
					'key'               => 'field_6193d62bbf306',
					'label'             => 'Product Features',
					'name'              => '',
					'type'              => 'message',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'message'           => 'Show off the product features!',
					'new_lines'         => 'wpautop',
					'esc_html'          => 0,
				),
				array(
					'key'               => 'field_6193d66ebf307',
					'label'             => 'Heading',
					'name'              => 'heading',
					'type'              => 'text',
					'instructions'      => 'Enter a heading.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'prepend'           => '',
					'append'            => '',
					'maxlength'         => '',
				),
				array(
					'key'               => 'field_6193d687bf308',
					'label'             => 'Description',
					'name'              => 'description',
					'type'              => 'textarea',
					'instructions'      => 'Describe the product.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'default_value'     => '',
					'placeholder'       => '',
					'maxlength'         => '',
					'rows'              => 4,
					'new_lines'         => '',
				),
				array(
					'key'               => 'field_6193d6aebf309',
					'label'             => 'Features',
					'name'              => 'features',
					'type'              => 'repeater',
					'instructions'      => '',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'collapsed'         => '',
					'min'               => 0,
					'max'               => 0,
					'layout'            => 'block',
					'button_label'      => 'Add a Feature',
					'sub_fields'        => array(
						array(
							'key'               => 'field_6193d6cdbf30a',
							'label'             => 'Name',
							'name'              => 'name',
							'type'              => 'text',
							'instructions'      => 'Name the feature.',
							'required'          => 0,
							'conditional_logic' => 0,
							'wrapper'           => array(
								'width' => '',
								'class' => '',
								'id'    => '',
							),
							'show_in_graphql'   => 1,
							'default_value'     => '',
							'placeholder'       => '',
							'prepend'           => '',
							'append'            => '',
							'maxlength'         => '',
						),
						array(
							'key'               => 'field_6193d6e7bf30b',
							'label'             => 'Description',
							'name'              => 'description',
							'type'              => 'textarea',
							'instructions'      => 'Describe the feature.',
							'required'          => 0,
							'conditional_logic' => 0,
							'wrapper'           => array(
								'width' => '',
								'class' => '',
								'id'    => '',
							),
							'default_value'     => '',
							'placeholder'       => '',
							'maxlength'         => '',
							'rows'              => 2,
							'new_lines'         => '',
						),
					),
				),
				array(
					'key'               => 'field_6193d724bf30c',
					'label'             => 'Images',
					'name'              => 'images',
					'type'              => 'gallery',
					'instructions'      => 'Choose some product images to display.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'return_format'     => 'url',
					'preview_size'      => 'medium',
					'insert'            => 'append',
					'library'           => 'all',
					'min'               => '',
					'max'               => '',
					'min_width'         => '',
					'min_height'        => '',
					'min_size'          => '',
					'max_width'         => '',
					'max_height'        => '',
					'max_size'          => '',
					'mime_types'        => '',
				),
			),
			'location'                              => array(
				array(
					array(
						'param'    => 'block',
						'operator' => '==',
						'value'    => 'acf/acme-product-features',
					),
				),
			),
			'menu_order'                            => 0,
			'position'                              => 'normal',
			'style'                                 => 'default',
			'label_placement'                       => 'top',
			'instruction_placement'                 => 'label',
			'hide_on_screen'                        => '',
			'active'                                => true,
			'description'                           => '',
			'show_in_rest'                          => 0,
			'show_in_graphql'                       => 1,
			'graphql_field_name'                    => 'blockProductFeatures',
			'map_graphql_types_from_location_rules' => 0,
			'graphql_types'                         => '',
		)
	);

	acf_add_local_field_group(
		array(
			'key'                                   => 'group_619f1ac8c78a4',
			'title'                                 => 'Page Settings',
			'fields'                                => array(
				array(
					'key'               => 'field_619f1ad8de5d5',
					'label'             => 'Hide Page Title',
					'name'              => 'hidePageTitle',
					'type'              => 'true_false',
					'instructions'      => 'If you have a hero block or another block that provides an h1, you might want to hide the page title.',
					'required'          => 0,
					'conditional_logic' => 0,
					'wrapper'           => array(
						'width' => '',
						'class' => '',
						'id'    => '',
					),
					'show_in_graphql'   => 1,
					'message'           => 'Hide page title',
					'default_value'     => 0,
					'ui'                => 0,
					'ui_on_text'        => '',
					'ui_off_text'       => '',
				),
			),
			'location'                              => array(
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'post',
					),
				),
				array(
					array(
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'page',
					),
				),
			),
			'menu_order'                            => 0,
			'position'                              => 'side',
			'style'                                 => 'default',
			'label_placement'                       => 'top',
			'instruction_placement'                 => 'label',
			'hide_on_screen'                        => '',
			'active'                                => true,
			'description'                           => '',
			'show_in_rest'                          => 0,
			'show_in_graphql'                       => 1,
			'graphql_field_name'                    => 'pageSettings',
			'map_graphql_types_from_location_rules' => 0,
			'graphql_types'                         => '',
		)
	);
}
