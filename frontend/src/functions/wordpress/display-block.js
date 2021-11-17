import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

/**
 * Decide which block component to display.
 * Import WP blocks using Next Dynamic Imports.
 * @see https://nextjs.org/docs/advanced-features/dynamic-import
 */
export default function displayBlock(block, index) {
  const { attributes, name } = block

  // prettier-ignore
  switch (name) {

    case 'core/freeform':
      const Freeform = dynamic(() => import("@/components/blocks/Freeform"));
      return <Freeform {...attributes} key={index} />

    case 'acf/acme-call-to-action':
      const CallToAction = dynamic(() => import("@/components/blocks/CallToAction"));
      return <CallToAction {...attributes.data} key={index} />

    case 'acf/acme-product-features':
      const ProductFeatures = dynamic(() => import("@/components/blocks/ProductFeatures"));
      return <ProductFeatures {...attributes.data} key={index} />

    default:
      return <pre key={index}>{JSON.stringify(block, null, 2)}</pre>
  }
}

displayBlock.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}
