import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  getContributors,
  getRepos,
  getRepoDetails,
  selectedRepo,
  userError,
  repoError
} from "../actions/actions";
import CustomNavbar from "../components/navbar";
import InputTypehead from "../components/input";
import RepoList from "../components/list";
import SimpleLineChart from "../components/chart";

class App extends Component {
  componentDidMount() {
    this.props.getContributors();
  }

  /*Handling user submit and updating the redux store with repos*/
  handleUserSubmit = user => {
    let userExist = this.props.users.find(userItem => {
      if (userItem.data === user) {
        return true;
      }
    });
    if (!userExist) {
      this.props.userError(
        "User doesn't exist, Please select a user from the drop down list"
      );
      setTimeout(() => {
        this.props.userError("");
      }, 3000);
    } else {
      this.props.getRepos(user);
    }
  };

  /*Handling repo submit and updating the redux store with repodetails*/
  handleRepoSubmit = repo => {
    let repoExist = this.props.repos.find(repoItem => {
      if (repoItem.data === repo) {
        return true;
      }
    });
    if (!repoExist) {
      this.props.repoError(
        "Repo doesn't exist, please choose a repo from the drop down list"
      );
      setTimeout(() => {
        this.props.repoError("");
      }, 3000);
    } else {
      let repoDetails = {
        ownerName: this.props.repos[0].owner,
        repoName: repo
      };
      this.props.selectedRepo(repo);
      this.props.getRepoDetails(repoDetails);
    }
  };

  /*Show user list data, repo list data when its is available in redux store*/
  showUsers = () => {
    if (this.props.users.length === 0) {
      return <div>Loading App...</div>;
    } else {
      return (
        <Fragment>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <InputTypehead
              users={this.props.users}
              label="Git-hub users"
              handleSubmit={this.handleUserSubmit}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <InputTypehead
              users={this.props.repos}
              label="Git hub repos"
              handleSubmit={this.handleRepoSubmit}
            />
          </div>
        </Fragment>
      );
    }
  };

  /*Render chart with chart data from local state*/
  showChart = () => {
    if (this.props.repoDetail.length > 0) {
      return (
        <SimpleLineChart
          data={this.props.repoDetail}
          repoName={this.props.repoName}
        />
      );
    }
  };

  render() {
    /*Error message*/
    let msg;
    if (this.props.errors.length > 0) {
      msg = (
        <div className="app-main__error--msg col-lg-6 col-md-6 col-sm-12">
          {this.props.errors}
        </div>
      );
    }

    return (
      <Fragment>
        {/*Navbar*/}
        <CustomNavbar />

        <section className="container">
          {/*App input container*/}

          <section className="app-main row">{this.showUsers()}</section>

          {/*Error message*/}

          <section className="app-main__error">{msg}</section>

          {/*Chart display*/}
          <section>{this.showChart()}</section>

          {/*Repo list*/}
          <section>
            <RepoList
              repos={this.props.repos}
              user={this.props.repos[0]}
              handleSubmit={this.handleRepoSubmit}
            />
          </section>
        </section>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.contributors,
  repos: state.repos,
  repoDetail: state.repoDetail,
  repoName: state.repoName,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    getContributors,
    getRepos,
    getRepoDetails,
    selectedRepo,
    userError,
    repoError
  }
)(App);
