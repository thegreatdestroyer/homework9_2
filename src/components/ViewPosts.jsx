import { useState, useContext } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Post from "./Posts/Post";
import PostsContext from "./Posts/PostsContext";

const ViewPosts = () => {
    const params = useParams();
    const { posts } = useContext(PostsContext);
    const [redirect, setRedirect] = useState(false);

    const post = posts.find((item) => item.id === parseInt(params.id));

    const handleDelete = (event) => {
        event.preventDefault();
        fetch(`http://localhost:7777/posts/${post.id}`, {method: 'DELETE'})
            .then(() => setRedirect(true));
    }

    return (
        <div className="page post-page">
            <Post post={post}>
                <div className="post-actions-container">
                    <Link to={`/posts/edit/${post.id}`}>
                        <button  className="btn edit-btn">Изменить</button>
                    </Link>
                    <button className="btn delete-btn" onClick={handleDelete}>Удалить</button>
                </div>
            </Post>
            {redirect && <Navigate to='/' />}
        </div>
    )
}

export default ViewPosts;