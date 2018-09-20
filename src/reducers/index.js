import { combineReducers } from "redux";
import contributors from "./contributors_Reducer";
import repos from "./repos_Reducer";
import repoDetail from "./repo_detail_Reducer";
import repoName from "./selected_Repo";
import errors from "./error_Reducer";

const rootReducer = combineReducers({
  contributors: contributors,
  repos: repos,
  repoDetail: repoDetail,
  repoName: repoName,
  errors: errors
});

export default rootReducer;
