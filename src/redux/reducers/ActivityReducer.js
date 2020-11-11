import * as actionType from '../actionTypes';

export default function Activity(
  state = {
    activityDetails: {},
    activity: {},
    activityComments: {},
  },
  action
) {
  switch (action.type) {
    case actionType.ACTIVITY_DETAILS:
      return Object.assign({}, state, {
        activityDetails: action.payload,
      });
    case actionType.GET_ACTIVITY:
      return Object.assign({}, state, {
        activity: action.payload,
      });
    case actionType.GET_ACTIVITY_COMMENTS:
      return Object.assign({}, state, {
        activityComments: action.payload,
      });
    default:
      return state;
  }
}
