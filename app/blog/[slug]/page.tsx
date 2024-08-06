import { cache } from "react";

interface Post {
    title: string;
    content: string;
    slug: string;
}

interface Props {
    params: { slug: String };
}

export default async function BlogPostPage({params}:Props) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content', { cache:"default" }).then(
        (res) => {
            return res.json()
        }
    );

    const post = posts.find((post) => post.slug === params.slug)!;

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.slug}</p>
        </div>
    );
}