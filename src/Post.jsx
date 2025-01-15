import React from "react"
import { useState } from "react"
import { useRef } from "react"

function Post ({index, title, body, likes, comments, handlePostLikes, handlePostComments }) {
    const [postLikes, setPostLikes] = useState(likes)
    const [postComments, setPostComments] = useState(comments)
    const commentTyped = useRef()
    const [typeComment, setTypeComment] = useState(false)


    function handleLike () {
        setPostLikes((prevLikes) => {
            const updatedLikes = prevLikes + 1;
            handlePostLikes(updatedLikes, index);
            return updatedLikes;
        });
    }

    function handleComment () {
        const commentSubmitted = commentTyped.current.value.trim()
        setPostComments((prevComments) => {
            const updatedComments = [...prevComments, commentSubmitted];
            handlePostComments(updatedComments, index);
            return updatedComments;
        });
        setTypeComment(false)
    }

    return (
        <div>
            <h1>{title}</h1>
            <li>{body}</li>
            <button onClick={handleLike}>{"Likes: "}{postLikes}</button>
            <button onClick={() => setTypeComment(true)}>Add Comment</button>
            {(typeComment) && (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    handleComment(e)
                }}>
                    <label htmlFor="comment">Comment</label>
                    <input
                        id="comment"
                        type="text"
                        ref={commentTyped}
                        placeholder="Leave comment...."
                    />
                </form>
            )}
            <ul>
                {postComments.map((comment, ind) => (
                    <li key={ind}>{comment}</li>
                ))}
            </ul>
        </div>
    )
}

export default Post;