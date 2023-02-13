import React, { useState } from "react";
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
    const [value, setValue] = useState();
    const [redirect, setRedirect] = useState(false);

    const handleChange = (event) => setValue(event.target.value);

    const handleCancel = (event) => {
        event.preventDefault();
        setRedirect(true);
    }

    const handleAdd = (event) => {
        event.preventDefault();
        fetch("http://localhost:7777/posts", {
            method: 'POST',
            body: JSON.stringify({ id: 0, content: value }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => setRedirect(true));
    }

    return (
        <div className="page create-post-page">
            <div className="create-post-container">
                <div className="create-post-header">
                    <h5>Создать публикацию</h5>
                    <button className="btn cancel-btn" onClick={handleCancel}>X</button>
                </div>
                <form className="create-post-form">
                    <textarea className="create-post-input" placeholder="Введите текст" value={value} onChange={handleChange} required />
                    <div className="button-wrapper">
                        <button className="btn add-btn" onClick={handleAdd}>Опубликовать</button>
                    </div>
                </form>
            </div>
            {redirect && <Navigate to='/' />}
        </div>
    )
}

export default CreatePost;