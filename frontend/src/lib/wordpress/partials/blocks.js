export const ALL_BLOCKS = `
  ... on CoreFreeformBlock {
    name
    attributes {
      content
    }
  }
  ... on AcfAcmeCallToActionBlock {
    name
    acfAttributes {
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
    acfAttributes {
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
    acfAttributes {
      description
      features {
        description
        name
      }
      heading
    }
  }
`
