import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getContributors, getRepos, getRepoDetails } from "../actions/actions";
import CustomNavbar from "../components/navbar";
import InputTypehead from "../components/input";
import RepoList from "../components/repo_list";
import SimpleLineChart from "../components/chart";
import CustomFooter from "../components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: "",
      repos: [],
      repoDetail: [],
      user: "",
      showChart: false,
      selectedRepo: ""
    };
  }

  componentDidMount() {
    this.props.getContributors();
  }

  componentWillReceiveProps(nextProps) {
    let users = nextProps.users.map(user => {
      return {
        data: user.login,
        id: user.id
      };
    });
    let reposNew = nextProps.repos.map(repo => {
      return {
        owner: repo.owner.login,
        data: repo.name,
        id: repo.id
      };
    });
    let repoDetail = nextProps.repoDetail.map(repo => {
      return {
        name: repo.login,
        contribution: repo.contributions
      };
    });
    this.setState({
      users: users,
      repos: reposNew,
      repoDetail: repoDetail,
      user: reposNew[0]
    });
  }

  /*Handling user submit and updating the redux state with repos*/

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
      this.setState({ showRepoSelector: true });
    }
  };

  /*Handling repo submit and updating the redux state with repodetails*/

  handleRepoSubmit = repo => {
    let repoExist = this.state.repos.find(repoItem => {
      if (repoItem.data === repo) {
        return true;
      }
    });
    if (!repoExist) {
      this.setState({
        error: "repo doesn't exist, select a proper user and select again"
      });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 3000);
    } else {
      let repoDetails = {
        ownerName: this.state.repos[0].owner,
        repoName: repo
      };
      this.props.getRepoDetails(repoDetails);
      this.setState({ showChart: true, selectedRepo: repo });
    }
  };

  showUsers = () => {
    if (this.props.users.length === 0) {
      return <div>Loading App...</div>;
    } else {
      return (
        <Fragment>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <InputTypehead
              users={this.state.users}
              label="Git-hub users"
              handleSubmit={this.handleUserSubmit}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <InputTypehead
              users={this.state.repos}
              label="Git hub repos"
              handleSubmit={this.handleRepoSubmit}
            />
          </div>
        </Fragment>
      );
    }
  };

  showChart = () => {
    if (this.state.repoDetail.length < 1 && !this.state.showChart) {
      return <div />;
    } else if (this.state.repoDetail.length < 1 && this.state.showChart) {
      return <div>Loading chart</div>;
    } else if (this.state.repoDetail.length > 0 && this.state.showChart) {
      return (
        <SimpleLineChart
          data={this.state.repoDetail}
          repoName={this.state.selectedRepo}
        />
      );
    }
  };

  render() {
    const { error } = this.state;
    let msg, repos;
    if (error.length > 0) {
      msg = (
        <div className="app-main__error--msg col-lg-6 col-md-6 col-sm-12">
          {this.state.error}
        </div>
      );
    }

    return (
      <Fragment>
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
            <RepoList repos={this.state.repos} user={this.state.user} />
          </section>
        </section>
        <CustomFooter />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  users: state.contributors,
  repos: state.repos,
  repoDetail: state.repoDetail
});

export default connect(
  mapStateToProps,
  { getContributors, getRepos, getRepoDetails }
)(App);
