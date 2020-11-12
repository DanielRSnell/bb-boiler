import * as actionType from "../actionTypes";

export default function Member(
  state = {
    cover: "",
    avatar: "",
    profile: {},
    memberDetail: {},
    members: [],
    memberDetails: []
  },
  action
) {
  switch (action.type) {
    case actionType.MEMBER_COVER:
      return Object.assign({}, state, {
        cover: action.payload
      });
    case actionType.MEMBER_AVATAR:
      return Object.assign({}, state, {
        avatar: action.payload
      });
    case actionType.MEMBER_PROFILE:
      return Object.assign({}, state, {
        profile: action.payload
      });
    case actionType.MEMBER_DETAIL:
      return Object.assign({}, state, {
        memberDetail: action.payload
      });
    case actionType.ALL_MEMBERS:
      return Object.assign({}, state, {
        members: action.payload
      });
    case actionType.ALL_MEMBERS_DETAILS:
      return Object.assign({}, state, {
        memberDetails: action.payload
      });
    case actionType.MEMBER_ACTION:
      return Object.assign({}, state, {});
    case actionType.DELETE_MEMBER:
      return Object.assign({}, state, {
        members: state.members.filter((member) => member.id !== action.payload)
      });
    default:
      return state;
  }
}
