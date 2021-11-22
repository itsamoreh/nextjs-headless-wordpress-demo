import NextHead from 'next/head'
import PropTypes from 'prop-types'

export default function Head({ link, seo }) {
  return (
    <NextHead>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:url" content={link} />
      <meta property="og:title" content={seo.openGraphTitle} />
      <meta property="og:type" content={seo.openGraphType} />
      <meta property="og:description" content={seo.openGraphDescription} />
      {seo?.socialImage?.sourceUrl && (
        <>
          <meta property="og:image" content={seo.socialImage.sourceUrl} />
          <meta
            name="twitter:image:alt"
            content={seo.socialImage.altText ?? ''}
          />
        </>
      )}

      <meta name="twitter:card" content="summary_large_image" />
    </NextHead>
  )
}

Head.propTypes = {
  link: PropTypes.string,
  seo: PropTypes.shape({
    canonicalUrl: PropTypes.string,
    description: PropTypes.string,
    openGraphDescription: PropTypes.string,
    openGraphTitle: PropTypes.string,
    openGraphType: PropTypes.string,
    socialImage: PropTypes.shape({
      altText: PropTypes.string,
      slug: PropTypes.string,
    }),
  }),
}
