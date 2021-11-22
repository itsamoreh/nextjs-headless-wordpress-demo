import PropTypes from 'prop-types'
import cn from 'classnames'
import React, { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

/**
 * Code Block
 *
 * The cedaro/code Gutenberg block.
 */
export default function Code({
  content,
  language,
  firstLineNumber,
  highlightLines,
  showLineNumbers,
}) {
  console.log(language)
  useEffect(() => {
    Prism.highlightAll()
  }, [])
  return (
    <div className="container mb-8 text-sm">
      <div className="max-w-[80ch] mx-auto">
        <pre className={cn('rounded-lg', showLineNumbers && 'line-numbers')}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </pre>
      </div>
    </div>
  )
}

Code.propTypes = {
  content: PropTypes.string,
  language: PropTypes.string,
  firstLineNumber: PropTypes.number,
  highlightLines: PropTypes.arrayOf(PropTypes.number),
  showLineNumbers: PropTypes.bool,
}

Code.defaultProps = {
  content: '',
}
