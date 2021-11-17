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

      <main className="container pt-28 mx-auto">
        <div className="max-w-lg mx-auto mb-16 text-center">
          <h1 className="mb-4 text-6xl font-extrabold">{post.title}</h1>
        </div>

        <Blocks blocks={JSON.parse(post.blocksJSON)} />

        <div className="w-full py-8 mt-2 text-center border-t border-gray-300 transition-colors duration-100">
          <Link href="/">
            <a className="hover:text-blue-700 focus:text-blue-700 active:text-blue-700">
              ← Back to home
            </a>
          </Link>
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
          content
          blocksJSON
          title
          slug
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
