import React from "react";
import "./App.css";
import Post from "./Post";
import { getPosts, deletePost, createPost } from "./utils/api";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      openPostForm: false,
      postForm: {
        title: "",
        body: ""
      }
    };
  }

  componentDidMount() {
    getPosts().then(res => this.setState({ posts: res.data }));
  }

  onTextChange = (type, value) =>
    this.setState({ postForm: { ...this.state.postForm, [type]: value } });

  onSubmit = () => {
    createPost({
      ...this.state.postForm,
      userId: 1
    })
      .then(response => response.json())
      .then(json =>
        this.setState(prevState => ({
          posts: prevState.posts.concat({
            ...prevState.postForm,
            userId: 1,
            id: json.id
          }),
          postForm: {
            title: "",
            body: ""
          },
          openPostForm: false
        }))
      );
  };

  onDelete = postId => {
    deletePost(postId).then(() =>
      this.setState(prevState => ({
        posts: prevState.posts.filter(post => post.id !== postId)
      }))
    );
  };

  render() {
    const { posts, postForm, openPostForm } = this.state;

    return (
      <div className="posts-main">
        <button
          className="create-post"
          onClick={() => this.setState({ openPostForm: true })}
        >
          +
        </button>
        <h1>Posts</h1>
        <ul>
          {posts
            .sort((postA, postB) => postB.id - postA.id)
            .map(post => (
              <Post
                key={post.id}
                {...post}
                onDelete={() => this.onDelete(post.id)}
              />
            ))}
        </ul>
        {openPostForm && (
          <div className="post-form">
            <h1>New Post</h1>
            <input
              type="text"
              placeholder="Title"
              value={postForm.title}
              onChange={event => this.onTextChange("title", event.target.value)}
            />
            <textarea
              placeholder="Body"
              onChange={event => this.onTextChange("body", event.target.value)}
              value={postForm.body}
            ></textarea>
            <div className="post-form-button-group">
              <button onClick={this.onSubmit}>Post</button>
              <button onClick={() => this.setState({ openPostForm: false })}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
