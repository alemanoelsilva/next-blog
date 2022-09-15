import Head from 'next/head'
import Link from 'next/link';
import { getPosts } from '../lib/posts';

// run only on server side
export async function getStaticProps(context) {
  const posts = await getPosts()

  return {
    props: { posts }
  }
}

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          {posts.map(({ title, slug }) => (
            <li key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default HomePage;
