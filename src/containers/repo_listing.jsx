import React, { Component } from "react";
import { connect } from "react-redux";
import { getRepoDetails } from "../actions/actions";
import InputTypehead from "../components/input";
import SimpleLineChart from "../components/chart";

class RepoListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      repoDetail: [],
      user: "",
      submit: false
    };
  }

  componentWillReceiveProps(nextProps) {
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
      repos: reposNew,
      repoDetail: repoDetail,
      user: nextProps.repos[0].owner.login
    });
  }

  handleRepoSubmit = repo => {
    let repoDetails = {
      ownerName: this.state.repos[0].owner,
      repoName: repo
    };
    this.props.getRepoDetails(repoDetails);
    this.setState({ submit: true });
  };

  showDetails = () => {
    if (this.props.repos.length === 0) {
      return <div>Loading App...</div>;
    } else {
      let content;
      if (this.props.repoDetail.length > 0) {
        content = <SimpleLineChart data={this.state.repoDetail} />;
      } else if (this.state.submit) {
        content = <div>"Repo doesn't exist"</div>;
      }
      return (
        <div>
          <section className="repo-list__section">
            <InputTypehead
              users={this.state.repos}
              label="Git-hub Repos"
              handleSubmit={this.handleRepoSubmit}
            />
            {content}
          </section>
          <h2>Repo-List</h2>
          <ul className="repo-list">
            {this.state.repos.map(repo => {
              return (
                <li
                  className="repo-list__item col-lg-3 col-md-4 col-sm-12"
                  key={repo.id}
                >
                  {repo.data}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <h2>
          Repo listing:
          {this.state.user}
        </h2>

        {this.showDetails()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: state.repos,
  repoDetail: state.repoDetail
});

export default connect(
  mapStateToProps,
  { getRepoDetails }
)(RepoListing);
