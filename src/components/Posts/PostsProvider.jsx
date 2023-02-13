import React, { useState, useEffect } from "react";

import PostsContext from "./PostsContext";

const PostsProvider = (props) => {
    const [posts, setPosts] = useState();

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);

    const handleChange = (data) => setPosts(data);

    return (
        <PostsContext.Provider value={{ posts: posts, handleChange: handleChange }} >
            {props.children}
        </PostsContext.Provider>
    )
}

export default PostsProvider;