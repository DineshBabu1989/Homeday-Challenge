import { GET_CONTRIBUTORS } from "../actions/actions";
/*Get user list*/
const contributors = (state = [], action) => {
  switch (action.type) {
    case GET_CONTRIBUTORS: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default contributors;
