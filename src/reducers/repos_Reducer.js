import { GET_REPOS } from "../actions/actions";

const repos = (state = [], action) => {
  switch (action.type) {
    case GET_REPOS:
      return action.payload;
    default:
      return state;
  }
};

export default repos;
