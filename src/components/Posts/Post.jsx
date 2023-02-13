import React from 'react';
import moment from 'moment';
import avatar from './avatar.jpg';

const Post = ( props ) => {
    const { post } = props;
    const date = post.created;
    const newDate = moment(date).fromNow();

    return (
        <div className="post">
            <div className="post-header">
                <img className="user-img" src={avatar} alt="img" />
                <div className="post-info">
                    <p className="user-name">Пользователь</p>
                    <p className="post-date">{newDate}</p>
                </div>
            </div>
            <div className="post-content">{post.content}</div>
            <div className="post-footer">
                <button className="btn like-btn">Нравится</button>
                <button className="btn comment-btn">Комментировать</button>
            </div>
            {props.children}
        </div>
    )
}

export default Post;