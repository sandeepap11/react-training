import React from "react";
import Post from "./Post";
import { fetchPosts } from "../redux/actions";
import { connect } from "react-redux";
import AddPost from "./AddPost";
import Loader from "./Loader";

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const {
      posts,
      isPostsFetched,
      isPostAddRequested,
      isPostAdded,
      isPostDeleteRequested,
      isPostDeleted
    } = this.props;

    const isLoading =
      !isPostsFetched ||
      (isPostAddRequested && !isPostAdded) ||
      (isPostDeleteRequested && !isPostDeleted);

    const loaderMessage = !isPostsFetched
      ? "Loading ..."
      : isPostAddRequested && !isPostAdded
      ? "Adding Post"
      : "Deleting Post";

    return (
      <div className="posts-main">
        {isLoading && <Loader>{loaderMessage}</Loader>}
        <h1>Posts</h1>
        <ul>
          {posts
            .sort((postA, postB) => postB.id - postA.id)
            .map(post => (
              <Post key={post.id} {...post} />
            ))}
        </ul>
        <AddPost />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  isPostsFetched: state.isPostsFetched,
  isPostsFetchSuccess: state.isPostsFetchSuccess,
  isPostAddRequested: state.isPostAddRequested,
  isPostAdded: state.isPostAdded,
  isPostAddSuccess: state.isPostAddSuccess,
  isPostDeleteRequested: state.isPostDeleteRequested,
  isPostDeleted: state.isPostDeleted,
  isPostDeleteSuccess: state.isPostDeleteSuccess
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
