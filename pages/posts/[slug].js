import Head from "next/head"
import { getPost, getSlugs } from "../../lib/posts"

// tell to next witch path is valid, use when [name] is used
export async function getStaticPaths() {
  const slugs = await getSlugs()

  return {
    paths: slugs.map(slug => ({
      params: { slug }
    })),
    // what to do if a non path is passed
    fallback: false,
  }
}

// run only on server side
export async function getStaticProps(context) {
  const post = await getPost(context.params.slug)

  return {
    props: { post }
  }
}

const PostPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <article dangerouslySetInnerHTML={{ __html: post.body }} />
      </main>
    </>
  )
}

export default PostPage