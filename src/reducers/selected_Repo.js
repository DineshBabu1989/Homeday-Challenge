import { SELECT_REPO } from "../actions/actions";
/*Repo Name for chart*/
const repoName = (state = null, action) => {
  switch (action.type) {
    case SELECT_REPO: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default repoName;
