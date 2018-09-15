import { combineReducers } from "redux";
import contributors from "./contributors_Reducer";
import repos from "./repos_Reducer";
import repoDetail from "./repo_detail_Reducer";

const rootReducer = combineReducers({
  contributors: contributors,
  repos: repos,
  repoDetail: repoDetail
});

export default rootReducer;
