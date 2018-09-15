import axios from "axios";
export const GET_CONTRIBUTORS = "GET_CONTRIBUTORS";
export const GET_REPOS = "GET_REPOS";
export const GET_REPO_DETAIL = "GET_REPO_DETAIL";

/*Getting intial contributors list on app load*/
export const getContributors = () => dispatch => {
  axios
    .get("https://api.github.com/repos/angular/angular/contributors")
    .then(res => {
      dispatch({
        type: GET_CONTRIBUTORS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

/*Getting repos for selected user*/
export const getRepos = user => dispatch => {
  let reqUrl = `https://api.github.com/users/${user}/repos`;
  axios
    .get(reqUrl)
    .then(res => {
      dispatch({
        type: GET_REPOS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

/*Getting contribution from other users
https://api.github.com/repos/${user}/${reponame}/contributors
*/
export const getRepoDetails = repoDetails => dispatch => {
  let reqUrl = `https://api.github.com/repos/${repoDetails.ownerName}/${
    repoDetails.repoName
  }/contributors`;
  axios
    .get(reqUrl)
    .then(res => {
      dispatch({
        type: GET_REPO_DETAIL,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
