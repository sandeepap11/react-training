import React from "react";
import "../App.css";

const withLoading = WrappedComponent => {
  return class wrappedComponentWithLoading extends React.Component {
    render() {
      const { isLoading } = this.props;

      return (
        <>
          {isLoading ? (
            <div className="data-loading">Data loading ...</div>
          ) : (
            <WrappedComponent {...this.props} />
          )}
        </>
      );
    }
  };
};

export default withLoading;
