import { GET_CONTRIBUTORS } from "../actions/actions";
/*Get user list*/
const contributors = (state = [], action) => {
  switch (action.type) {
    case GET_CONTRIBUTORS: {
      const users = action.payload.map(user => {
        return {
          data: user.login,
          id: user.id
        };
      });
      return users;
    }

    default:
      return state;
  }
};

export default contributors;
