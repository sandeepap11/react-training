import React from "react";

function Post(props) {
  const { title, body } = props;
  return (
    <li>
      <h1>{title}</h1>
      <p>{body}</p>
    </li>
  );
}

export default Post;
