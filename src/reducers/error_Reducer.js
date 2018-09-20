import { USER_ERROR, REPO_ERROR } from "../actions/actions";
/*Error handling*/
const errors = (state = "", action) => {
  switch (action.type) {
    case USER_ERROR: {
      return action.payload;
    }
    case REPO_ERROR: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default errors;
