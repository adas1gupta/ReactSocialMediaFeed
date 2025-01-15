import React from "react";
import createRoot from "react-dom/client";
import usePosts from "./hooks/usePosts";
import { useState } from "react";
import Post from "./Post";

function App () {
    const [data, setData] = useState(usePosts(url))

    function handlePostLikes(likes, index) {
        setData((data) => (
            data.map((post) => (
                (post.id === index) ? (
                    {...post, likes: likes}
                ) : post
            ))
        ))
    }


    return (
        <ul>
            {data.map((post, index) => (
                <Post
                    key={index}
                    index={index}
                    title={post.title}
                    body={post.body}
                    likes={post.likes}
                    comments={post.comments}
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

