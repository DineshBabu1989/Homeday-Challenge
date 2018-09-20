import { GET_REPOS } from "../actions/actions";
/*Repo list for a single user*/
const repos = (state = [], action) => {
  switch (action.type) {
    case GET_REPOS: {
      const repos = action.payload.map(repo => {
        return {
          owner: repo.owner.login,
          data: repo.name,
          id: repo.id
        };
      });
      return repos;
    }
    default:
      return state;
  }
};

export default repos;
