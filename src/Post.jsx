function Post ({likes, }) {
    const [postLikes, setPostLikes] = useState(likes)
    const [postComments, setPostComments] = useState(comments)
    const [typeComment, setTypeComment] = useState(false)

    function handleLike () {
        setPostLikes((postLikes) => postLikes + 1)
        handlePostLikes(postLikes, index)
    }

    function handleComment () {
        
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <li>{post.content}</li>
            <button onClick={handleLike}>{"Likes: "}{post.likes}</button>
            <button onClick={() => setTypeComment(true)}>Add Comment</button>
            {(typeComment) && (
                <div>
                    <label htmlFor="comment">Comment</label>
                <input
                    
                />
                </div>
            )}
            <ul>
                {post.comments.map((comment, ind) => (
                    <li key={ind}>{comment}</li>
                ))}
            </ul>
        </div>
    )
}

export default Post;