import React from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";
import withLoading from "./components/LoadingHoc";

const PostsWithLoading = withLoading(Posts);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      isLoading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response =>
        this.setState({ posts: response.data, isLoading: false })
      );
  }

  render() {
    const { posts, isLoading } = this.state;

    return <PostsWithLoading isLoading={isLoading} posts={posts} />;
  }
}

export default App;
