import PropTypes from 'prop-types'

/**
 * Call To Action Block
 *
 * Call the user to action!
 */
export default function CallToAction({
  headingCall,
  headingQuestion,
  primaryCta,
  secondaryCta,
}) {
  return (
    <div className="mb-8 bg-gray-50">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">{headingQuestion ?? ''}</span>
          <span className="block text-indigo-600">{headingCall ?? ''}</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href={primaryCta?.url ?? ''}
              target={primaryCta?.target ?? ''}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {primaryCta?.title ?? ''}
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href={secondaryCta?.url ?? ''}
              target={secondaryCta?.target ?? ''}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              {secondaryCta?.title ?? ''}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

CallToAction.propTypes = {
  headingCall: PropTypes.string,
  headingQuestion: PropTypes.string,
  primaryCta: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
  secondaryCta: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    target: PropTypes.string,
  }),
}
