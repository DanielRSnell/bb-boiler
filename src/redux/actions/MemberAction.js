import * as API from "../../constants/API";
import * as actionType from "../actionTypes";
import { postRequest, deleteRequest, getRequest } from "../common";

export function getMembers() {
  return getRequest(API.MEMBER_API, actionType.ALL_MEMBERS);
}

export function getMemberProfile() {
  return getRequest(API.MEMBER_PROFILE_DROPDOWN, actionType.MEMBER_PROFILE);
}

export function createMemberAvatar(userId, body) {
  const apiUrl = API.MEMBER_AVATAR.replace(":user_id", userId);
  return postRequest(apiUrl, body, actionType.MEMBER_AVATAR);
}

export function getMemberAvatar(userId) {
  const apiUrl = API.MEMBER_AVATAR.replace(":user_id", userId);
  return getRequest(apiUrl, actionType.MEMBER_AVATAR);
}

export function deleteMemberAvatar(userId) {
  const apiUrl = API.MEMBER_AVATAR.replace(":user_id", userId);
  return deleteRequest(apiUrl, null, actionType.MEMBER_AVATAR);
}

export function createMemberCover(userId, body) {
  const apiUrl = API.MEMBER_COVER.replace(":user_id", userId);
  return postRequest(apiUrl, body, actionType.MEMBER_COVER);
}

export function getMemberCover(userId) {
  const apiUrl = API.MEMBER_COVER.replace(":user_id", userId);
  return getRequest(apiUrl, actionType.MEMBER_COVER);
}

export function deleteMemberCover(userId) {
  const apiUrl = API.MEMBER_COVER.replace(":user_id", userId);
  return deleteRequest(apiUrl, null, actionType.MEMBER_COVER);
}

export function deleteMember(memberId) {
  const apiUrl = API.DELETE_MEMBER.replace(":id", memberId);
  return deleteRequest(apiUrl, null, actionType.DELETE_MEMBER);
}

export function getMembersDetails() {
  return getRequest(API.ALL_MEMBERS_DETAILS, actionType.ALL_MEMBERS_DETAILS);
}

export function getMemberDetail(memberId) {
  const apiUrl = API.MEMBER_DETAIL.replace(":id", memberId);
  return getRequest(apiUrl, actionType.MEMBER_DETAIL);
}

export function toggleMemberAction(userId) {
  const apiUrl = API.MEMBER_ACTION.replace(":user_id", userId);
  return postRequest(apiUrl, null, actionType.MEMBER_ACTION);
}
