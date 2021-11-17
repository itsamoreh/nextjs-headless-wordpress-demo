import PropTypes from 'prop-types'
import styles from './Freeform.module.css'
import cn from 'classnames'

/**
 * Freeform Block
 *
 * The core Freeform Gutenberg block.
 */
export default function Freeform({ content }) {
  return (
    <div
      // tailwindcss-typography (prose) can be customized using the low-level customization API
      // @see https://github.com/tailwindlabs/tailwindcss-typography#customization
      className="mx-auto mb-8 prose prose-indigo"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

Freeform.propTypes = {
  content: PropTypes.string,
}

Freeform.defaultProps = {
  content: '',
}
