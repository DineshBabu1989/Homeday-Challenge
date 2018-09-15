import React, { Component } from "react";
import { connect } from "react-redux";
import { getContributors, getRepos } from "../actions/actions";
import InputTypehead from "../components/input";
import RepoListing from "../containers/repo_listing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: "",
      showRepoListing: false
    };
  }

  componentDidMount() {
    this.props.getContributors();
  }

  componentWillReceiveProps(nextProps) {
    let users = nextProps.details.map(user => {
      return {
        data: user.login,
        id: user.id
      };
    });
    this.setState({ users: users });
  }

  handleUserSubmit = user => {
    let userExist = this.state.users.find(userItem => {
      if (userItem.data === user) {
        return true;
      }
    });
    if (!userExist) {
      this.setState({ error: "user doesn't exist" });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    } else {
      this.props.getRepos(user);
      this.setState({ showRepoListing: true });
    }
  };

  showDetails = () => {
    if (this.props.details.length === 0) {
      return <div>Loading App...</div>;
    } else {
      return (
        <InputTypehead
          users={this.state.users}
          label="Git-hub users"
          handleSubmit={this.handleUserSubmit}
        />
      );
    }
  };

  render() {
    const { error, showRepoListing } = this.state;
    let msg, repos;
    if (error.length > 0) {
      msg = <div>{this.state.error}</div>;
    }
    if (showRepoListing) {
      repos = <RepoListing />;
    }
    return (
      <div>
        <h1>Git Hub Users</h1>
        {this.showDetails()}
        {msg}
        {repos}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  details: state.contributors,
  repos: state.repos
});

export default connect(
  mapStateToProps,
  { getContributors, getRepos }
)(App);
