import Head from '@/components/layout/Head'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { getApolloClient } from '@/lib/apollo/apollo-client'
import { ALL_BLOCKS } from '@/lib/wordpress/partials/blocks'
import { ALL_PAGE_SETTINGS } from '@/lib/wordpress/partials/page-settings'
import { ALL_SEO } from '@/lib/wordpress/partials/seo'
import Blocks from '@/components/blocks/Blocks'

export default function Post({ post }) {
  return (
    <>
      <Head seo={post.seo} link={post.link} />

      <main>
        {!post?.pageSettings?.hidepagetitle && (
          <h1 className="container max-w-4xl mx-auto my-16 text-center text-6xl font-extrabold break-words">
            {post.title}
          </h1>
        )}

        <Blocks blocks={post.blocks} />

        <div className="container pb-16">
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
        postBy(slug: $slug) {
          id
          title
          slug
          link
          seo {
            ${ALL_SEO}
          }
          pageSettings {
            ${ALL_PAGE_SETTINGS}
          }
          blocks {
            ${ALL_BLOCKS}
          }
        }
      }
    `,
    variables: {
      slug: postSlug,
    },
  })

  const post = data?.data.postBy

  return {
    props: {
      post,
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
