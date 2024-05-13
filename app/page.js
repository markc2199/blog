import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const { posts } = await getPosts({
    newest: true,
    limit: 3
  })
  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page</H1>
        <p>My name is Mark, I am a web developer.</p>
        <p>
          Checkout my <Link className="underline" href="/about/projects">projects</Link> and <Link className="underline-offset-2 underline" href="/blog">blog</Link>        </p>
      </section>
      <section>
        <h2 className="text-lg mb-8">Latest blog posts</h2>
        <ul className="font-mono">
          {posts.map((post) => {
            return(
              <li key={post.slug}>
                <span className="text-gray-400">
                  {post.frontmatter.date}&nbsp;
                </span>
                  <Link className="underline" href={`/blog/${post.slug}`}>
                    {post.frontmatter.title}
                  </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  );
}
