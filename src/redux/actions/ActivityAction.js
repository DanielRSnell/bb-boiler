import * as API from '../../constants/API';
import * as actionType from '../actionTypes';
import { postRequest, deleteRequest, patchRequest, getRequest } from '../common';

export function getActivityDetail() {
  return getRequest(API.ACTIVITY_DETAILS_API, actionType.ACTIVITY_DETAILS);
}

export function activityFavorite(activityId, data) {
  const apiUrl = API.ACTIVITY_FAVORITE_API.replace(':id', activityId);
  return patchRequest(apiUrl, data, actionType.ACTIVITY_FAVORITE);
}

export function createActivityComment(activityId, data) {
  const apiUrl = API.ACTIVITY_COMMENT_API.replace(':id', activityId);
  return postRequest(apiUrl, data, actionType.CREATE_ACTIVITY_COMMENT);
}

export function createActivity(data) {
  return postRequest(API.ACTIVITY_API, data, actionType.CREATE_ACTIVITY);
}

export function deleteActivity(activityId) {
  const apiUrl = API.ACTIVITY_API.replace(':id', activityId);
  return deleteRequest(apiUrl, null, actionType.DELETE_ACTIVITY);
}

export function getActivities() {
  return getRequest(API.ACTIVITY_API, actionType.GET_ACTIVITY);
}

export function getActivity(activityId) {
  const apiUrl = API.ACTIVITY_API.replace(':id', activityId);
  return getRequest(apiUrl, actionType.DELETE_ACTIVITY);
}

export function getActivityComments(activityId) {
  const apiUrl = API.ACTIVITY_COMMENT_API.replace(':id', activityId);
  return getRequest(apiUrl, actionType.GET_ACTIVITY_COMMENTS);
}

export function getLinkPreview(url) {
  const apiUrl = API.ACTIVITY_LINK_PREVIEW_API.replace(':url', url);
  return getRequest(apiUrl, actionType.GET_LINK_PREVIEW);
}

export function updateActivity(activityId, data) {
  const apiUrl = API.GET_ACTIVITY_API.replace(':id', activityId);
  return patchRequest(apiUrl, data, actionType.UPDATE_ACTIVITY);
}