import Head from 'next/head'
import Link from 'next/link'
import { gql } from '@apollo/client'
import { getApolloClient } from '@/lib/apollo/apollo-client'
import Navigation from '@/components/layout/Navigation'

export default function Home({ generalSettings, menu, posts }) {
  return (
    <>
      <Head>
        <title>{generalSettings.title}</title>
        <meta name="description" content={generalSettings.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mb-16">
        <Navigation
          menuItems={menu?.nodes[0].menuItems.nodes}
          generalSettings={generalSettings}
        />

        <ul>
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <li key={post.slug}>
                  <div className="max-w-2xl mx-auto mb-8 overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                    <Link href={post.path}>
                      <a>
                        {post.featuredImage?.node?.sourceUrl && (
                          <img
                            className="object-cover w-full h-64"
                            src={post.featuredImage?.node?.sourceUrl}
                            alt="Article"
                          />
                        )}

                        <div className="p-6">
                          <h3 className="block text-2xl font-black text-gray-800 dark:text-white hover:text-gray-600 hover:underline">
                            {post.title}
                          </h3>
                          {post.excerpt && (
                            <p
                              className="mt-2 text-sm text-gray-600 dark:text-gray-400"
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt,
                              }}
                            />
                          )}
                        </div>
                      </a>
                    </Link>
                  </div>
                </li>
              )
            })}

          {!posts ||
            (posts.length === 0 && (
              <li>
                <p>Oops, no posts found!</p>
              </li>
            ))}
        </ul>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = getApolloClient()

  const data = await apolloClient.query({
    query: gql`
      {
        generalSettings {
          title
          description
        }
        menus(where: { location: MENU_1 }) {
          nodes {
            menuItems {
              nodes {
                label
                path
                target
              }
            }
          }
        }
        posts(first: 10000) {
          edges {
            node {
              id
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                }
              }
              excerpt
              title
              slug
            }
          }
        }
      }
    `,
  })

  const generalSettings = {
    ...data?.data.generalSettings,
  }

  const menu = {
    ...data?.data.menus,
  }

  const posts = data?.data.posts.edges
    .map(({ node }) => node)
    .map((post) => {
      return {
        ...post,
        path: `/posts/${post.slug}`,
      }
    })

  return {
    props: {
      generalSettings,
      menu,
      posts,
    },
  }
}
