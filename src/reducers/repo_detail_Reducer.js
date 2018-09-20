import { GET_REPO_DETAIL } from "../actions/actions";
/*Repo Details for chart*/
const repoDetail = (state = [], action) => {
  switch (action.type) {
    case GET_REPO_DETAIL: {
      const repoDetail = action.payload.map(repo => {
        return {
          name: repo.login,
          contribution: repo.contributions
        };
      });
      return repoDetail;
    }

    default:
      return state;
  }
};

export default repoDetail;
