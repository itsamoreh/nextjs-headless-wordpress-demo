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
    <div class="max-w-6xl mx-auto mb-8 bg-gray-50">
      <div class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">{headingCall ?? ''}</span>
          <span class="block text-indigo-600">{headingQuestion ?? ''}</span>
        </h2>
        <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href={primaryCta?.url ?? ''}
              target={primaryCta?.target ?? ''}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {primaryCta?.title ?? ''}
            </a>
          </div>
          <div class="ml-3 inline-flex rounded-md shadow">
            <a
              href={secondaryCta?.url ?? ''}
              target={secondaryCta?.target ?? ''}
              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
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
