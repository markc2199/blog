import { getPost } from '@/lib/posts'
import fs from 'fs'
import path from 'path'

export default async function BlogPostsPage() {

    const files = fs.readdirSync(
        path.join(
            process.cwd(), 'content'
        )
    )

    const posts = await Promise.all(
        files.map(async filename => {
            const { frontmatter } = await getPost(filename)

            return {
                frontmatter,
                slug: filename.replace('.mdx', '')
            }
        })
    )

    return(
       <div>
            <h1>Recent posts</h1>
        </div> 
    )
    
}