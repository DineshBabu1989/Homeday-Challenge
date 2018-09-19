import React, { Fragment } from "react";

const RepoList = props => {
  /*Render a list of repo when the repo list is available in the props else display a message*/
  const handleClick = data => {
    props.handleSubmit(data);
  };
  if (props.user) {
    return (
      <Fragment>
        <ul className="app-list row">
          <div className="app-titles__sub col-lg-12">
            Repo List:
            {props.user.owner}
          </div>
          {props.repos.map(repo => {
            return (
              <li
                className="col-lg-3 col-md-4 col-sm-12"
                key={repo.id}
                onClick={() => handleClick(repo.data)}
              >
                <div className="app-list__item">{repo.data}</div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className="app-list__msg row">Select an user to view repos...</div>
      </Fragment>
    );
  }
};
export default RepoList;
