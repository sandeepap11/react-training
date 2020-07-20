import React, { Component } from "react";

// const Loading = WrappedComponent => props => {
//   return class LoadingHOC extends Component {
//     render() {
//       return props.isLoading ? "Loading ..." : <WrappedComponent {...props} />;
//     }
//   };
// };

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: "", comments: [] };
  }

  addComment = () =>
    this.setState(prevState => ({
      comment: "",
      comments: prevState.comments.concat(prevState.comment)
    }));

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.comment}
          onChange={event => this.setState({ comment: event.target.value })}
        />
        <button onClick={this.addComment}>Add Comment</button>
        <h1>All Comments</h1>
        {this.state.comments.map((com, index) => (
          <div key={com + index}>{com}</div>
        ))}
      </div>
    );
  }
}

export default Loading;
