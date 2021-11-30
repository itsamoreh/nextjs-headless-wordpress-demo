# Build a New Block

## 1. Create an ACF block

`backend/wordpress/wp-content/plugins/acme-acf/acme-acf-blocks.php`

```php
// Register a Hero block.
acf_register_block_type(
    array(
        'name'            => 'acme-hero',
        'title'           => __( 'Hero' ),
        'description'     => __( 'Full width CTA block designed for the top of the page.' ),
        'icon'            => 'align-wide',
        'keywords'        => array( 'hero', 'cta' ),
        'render_template' => plugin_dir_path( __FILE__ ) . '/template-parts/blocks/hero.php',
        'mode'            => 'edit',
        'supports'        => array(
            'align' => false,
            'mode'  => false,
        ),
    )
);
```

## 2. Create fields for the block

`backend/wordpress/wp-content/plugins/acme-acf/acme-acf-fields.php`

```php
acf_add_local_field_group(
    array(
        'key'                   => 'group_619f0ee698706',
        'title'                 => 'Block: Hero',
        'fields'                => array(
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
        'location'              => array(
            array(
                array(
                    'param'    => 'block',
                    'operator' => '==',
                    'value'    => 'acf/acme-hero',
                ),
            ),
        ),
        'menu_order'            => 0,
        'position'              => 'normal',
        'style'                 => 'default',
        'label_placement'       => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen'        => '',
        'active'                => true,
        'description'           => '',
        'show_in_rest'          => 0,
    )
);
```

## 3. Add block to allowlist

`backend/wordpress/wp-content/themes/bring-your-own-blocks/inc/byob.php`

```php
'acf/acme-hero'
```

## 4. Create block component

`frontend/src/components/blocks/Hero/Hero.js`

```jsx
import PropTypes from 'prop-types'

/**
 * Hero Block
 *
 * Full width CTA block designed for the top of the page.
 */
export default function Hero({
  headingMain,
  headingAccent,
  body,
  primaryCta,
  secondaryCta,
  image,
}) {
  return (
    <div className="relative mb-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">{headingMain}</span>
                <br />
                <span className="block text-indigo-600 xl:inline">
                  {headingAccent}
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {body}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={primaryCta?.url ?? ''}
                    target={primaryCta?.target ?? ''}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {primaryCta?.title ?? ''}
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={secondaryCta?.url ?? ''}
                    target={secondaryCta?.target ?? ''}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    {secondaryCta?.title ?? ''}
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gradient-to-r from-indigo-400 to-indigo-600">
        {image?.sourceUrl && (
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={image.sourceUrl}
            srcSet={image.srcSet || ''}
            alt={image.alt || ''}
          />
        )}
      </div>
    </div>
  )
}

Hero.propTypes = {
  headingMain: PropTypes.string,
  headingAccent: PropTypes.string,
  body: PropTypes.string,
  primaryCta: PropTypes.object,
  secondaryCta: PropTypes.object,
  image: PropTypes.object,
}
```

## 5. Display the block

`frontend/src/lib/wordpress/partials/blocks.js`

```graphql
... on AcfAcmeHeroBlock {
  name
  acf {
    body
    headingAccent
    headingMain
    image {
      altText
      srcSet
      sourceUrl
    }
    primaryCta {
      target
      title
      url
    }
    secondaryCta {
      target
      title
      url
    }
  }
}
```

`frontend/src/functions/wordpress/display-block.js`

```js
case 'acf/acme-hero':
  const Hero = dynamic(() => import("@/components/blocks/Hero"));
  return <Hero {...acf} key={index} />
```
