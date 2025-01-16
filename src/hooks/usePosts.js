
import { useState, useEffect } from "react";

function usePosts(page) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            const data = await response.json()
            const postsWithExtras = data.map(post => ({
                ...post,
                likes: 0,
                comments: []
            }))
            setPosts(prevPosts => [...prevPosts, ...postsWithExtras]);
        }

        fetchPosts()
    }, [page])

    return { posts, setPosts }
}

export default usePosts;