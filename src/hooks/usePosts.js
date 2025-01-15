import { useState, useEffect } from "react";

function usePosts(url) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch(url)
            const data = await response.json()
            setPosts(data)
        }

        fetchPosts()
    }, [url])

    return posts
}

export default usePosts;