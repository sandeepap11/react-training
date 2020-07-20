import React, { Component } from "react";

class Post extends Component {
  render() {
    const { title, body, onDelete } = this.props;
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
