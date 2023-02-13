import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';
import PostsContext from './PostsContext';

const PostList = () => {
    const { posts } = useContext(PostsContext);

    return (
        <div className='post-list'>
            {posts.map((item) => <Link to={`/posts/${item.id}`} key={item.id}><Post post={item} /></Link>)}
        </div>
    )
}

export default PostList;
