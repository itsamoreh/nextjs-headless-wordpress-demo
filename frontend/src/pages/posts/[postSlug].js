import Head from 'next/head'
import Link from 'next/link'
import Blocks from '@/components/blocks/Blocks'
import { gql } from '@apollo/client'

import { getApolloClient } from '@/lib/apollo-client'

export default function Post({ post, site }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`Read more about ${post.title} on ${site.title}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-28">
        <h1 className="max-w-4xl mx-auto mb-16 text-center text-6xl font-extrabold">
          {post.title}
        </h1>

        <Blocks blocks={post.blocks} />

        <div className="container">
          <div className="mx-auto prose prose-indigo">
            <hr />
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps({ params = {} } = {}) {
  const { postSlug } = params

  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      query PostBySlug($slug: String!) {
        generalSettings {
          title
        }
        postBy(slug: $slug) {
          id
          title
          slug
          blocks {
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
          }
        }
      }
    `,
    variables: {
      slug: postSlug,
    },
  })

  const post = data?.data.postBy

  const site = {
    ...data?.data.generalSettings,
  }

  return {
    props: {
      post,
      site,
    },
  }
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      {
        posts(first: 10000) {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `,
  })

  const posts = data?.data.posts.edges.map(({ node }) => node)

  return {
    paths: posts.map(({ slug }) => {
      return {
        params: {
          postSlug: slug,
        },
      }
    }),
    fallback: false,
  }
}
