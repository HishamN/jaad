import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">
                  ⚽ Welcome to social soccer 🌎
                </h1>{" "}
                <p className="lead">
                  {" "}
                  Let's Goal lets you make the most of every game you play and
                  helps you discover new games, wherever you are{" "}
                </p>{" "}
                <hr />
                <Link to="/register" className="btn btn-lg btn-outline-danger">
                  Let's Connect{" "}
                </Link>{" "}
                <Link to="/login" className="btn btn-lg btn-success">
                  Welcome Back{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
