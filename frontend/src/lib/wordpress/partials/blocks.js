export const ALL_BLOCKS = `
  ... on CoreFreeformBlock {
    name
    attributes {
      content
    }
  }
  ... on CedaroCodeBlock {
    name
    attributes {
      content
      language
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
