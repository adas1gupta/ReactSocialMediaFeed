import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import usePosts from "./hooks/usePosts";
import { useState, useRef } from "react";
import Post from "./Post";

function App () {
    const [page, setPage] = useState(1)
    const { posts, setPosts } = usePosts(page)
    const loaderRef = useRef(null);

    function handlePostLikes(likes, index) {
        setPosts((data) => (
            data.map((post) => (
                (post.id === index) ? (
                    {...post, likes: likes}
                ) : post
            ))
        ))
    }

    function handlePostComments(comments, index) {
        setPosts((data) => (
            data.map((post) => (
                (post.id === index) ? (
                    {...post, comments: comments}
                ) : post
            ))
        ))
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entry) => { //array of all the elements observed that we declare .observe on
                if (entry[0].isIntersecting) { //isIntersecting only exists for items of the array, not the entire array itself
                    setPage((prevPage) => prevPage + 1)
                }
            }
        )

        if (loaderRef.current) { //.current refers to the DOM element itself while .current.value refers to the value. 
            observer.observe(loaderRef.current);
        }

        return () => {
            observer.disconnect();
        }
    },[])

    return (
        <ul>
            {posts.map((post, index) => (
                <Post
                    key={index}
                    index={index}
                    title={post.title}
                    body={post.body}
                    likes={post.likes}
                    comments={post.comments}
                    handlePostLikes={handlePostLikes}
                    handlePostComments={handlePostComments}
                />
            ))}
            <div ref={loaderRef}>Loading...</div>
        </ul>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

