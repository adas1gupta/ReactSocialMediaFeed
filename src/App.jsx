import React from "react";
import { createRoot } from "react-dom/client";
import usePosts from "./hooks/usePosts";
import { useState } from "react";
import Post from "./Post";

function App () {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const { posts, setPosts } = usePosts(url)
    console.log(posts)

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

