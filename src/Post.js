import React from "react";

function Post(props) {
  {
    const { title, body, onDelete } = props;
    return (
      <li>
        <h1>{title}</h1>
        <p>{body}</p>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
}

export default Post;
