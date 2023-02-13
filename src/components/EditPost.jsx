import React, { useState, useContext } from "react";
import { useParams, Navigate } from 'react-router-dom';
import PostsContext from "./Posts/PostsContext";

const EditPost = () => {
    const { posts } = useContext(PostsContext);
    const params = useParams();
    const post = posts.find((item) => item.id === parseInt(params.id));
    const [redirect, setRedirect] = useState(false);
    const [value, setValue] = useState(post.content);

    const handleChange = (event) => setValue(event.target.value);

    const handleCancel = (event) => {
        event.preventDefault();
        setRedirect(true);
    }

    const handleEdit = (event) => {
        event.preventDefault();
        fetch("http://localhost:7777/posts", {
            method: 'POST',
            body: JSON.stringify({ id: post.id, content: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => setRedirect(true));
    }

    return (
        <div className="page edit-post-page">
            <div className="edit-post-container">
                <div className="edit-post-header">
                    <h5>Редактировать публикацию</h5>
                    <button className="btn cancel-btn" onClick={handleCancel}>X</button>
                </div>
                <form className="edit-post-form">
                    <textarea className="edit-post-input" value={value} onChange={handleChange} required />
                    <div className="button-wrapper">
                        <button className="btn add-btn" onClick={handleEdit}>Сохранить</button>
                    </div>
                </form>
            </div>
            {redirect && <Navigate to='/' />}
        </div>
    )
}

export default EditPost;