export const ALL_BLOCKS = `
  ... on CoreFreeformBlock {
    name
    attributes {
      content
    }
  }
  ... on AcfAcmeCallToActionBlock {
    name
    acf {
      headingCall
      headingQuestion
      primaryCta {
        target
        title
        url
      }
      secondaryCta {
        title
        target
        url
      }
    }
  }
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
  ... on AcfAcmeProductFeaturesBlock {
    name
    acf {
      description
      features {
        description
        name
      }
      heading
    }
  }
`
