import React from "react";
import Post from "./Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts-main">
      <h1>Posts</h1>
      <ul>
        {posts
          .sort((postA, postB) => postB.id - postA.id)
          .map(post => (
            <Post key={post.id} {...post} />
          ))}
      </ul>
    </div>
  );
};

export default Posts;
