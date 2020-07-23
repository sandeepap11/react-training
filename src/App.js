import React from "react";
import "./App.css";
import axios from "axios";
import Posts from "./components/Posts";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => this.setState({ posts: response.data }));
  }

  render() {
    const { posts } = this.state;

    return <Posts posts={posts} />;
  }
}

export default App;
