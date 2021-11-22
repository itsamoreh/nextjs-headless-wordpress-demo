import Head from '@/components/other/Head'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { getApolloClient } from '@/lib/apollo/apollo-client'
import { ALL_BLOCKS } from '@/lib/wordpress/partials/blocks'
import { ALL_SEO } from '@/lib/wordpress/partials/seo'
import Blocks from '@/components/blocks/Blocks'

export default function page({ page }) {
  return (
    <>
      <Head seo={page.seo} link={page.link} />

      <main className="py-28">
        <h1 className="max-w-4xl mx-auto mb-16 text-center text-6xl font-extrabold">
          {page.title}
        </h1>

        <Blocks blocks={page.blocks} />

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
  const { pageSlug } = params

  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      query PageBySlug($slug: String!) {
        pageBy(uri: $slug) {
          id
          title
          slug
          link
          seo {
            ${ALL_SEO}
          }
          blocks {
            ${ALL_BLOCKS}
          }
        }
      }
    `,
    variables: {
      slug: pageSlug,
    },
  })

  const page = data?.data.pageBy

  return {
    props: {
      page,
    },
  }
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      {
        pages(first: 10000) {
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

  const pages = data?.data.pages.edges.map(({ node }) => node)

  return {
    paths: pages.map(({ slug }) => {
      return {
        params: {
          pageSlug: slug,
        },
      }
    }),
    fallback: false,
  }
}
