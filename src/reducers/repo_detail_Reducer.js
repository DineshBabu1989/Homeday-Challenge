import { GET_REPO_DETAIL } from "../actions/actions";
/*Repo Details for chart*/
const repoDetail = (state = [], action) => {
  switch (action.type) {
    case GET_REPO_DETAIL: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default repoDetail;
