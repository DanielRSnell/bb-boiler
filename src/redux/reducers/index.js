import { combineReducers } from "redux";
import Activity from "./ActivityReducer";
import Member from "./MemberReducer";

const rootReducer = combineReducers({
  Activity,
  Member
});

export default rootReducer;
