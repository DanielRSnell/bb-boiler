const baseUrl = "http://localhost:5000";

export const ACTIVITY_API = baseUrl + "/wp-json/buddyboss/v1/activity";
export const ACTIVITY_DETAILS_API = ACTIVITY_API + "/details";
export const ACTIVITY_FAVORITE_API = ACTIVITY_API + "/:id/favorite";
export const ACTIVITY_COMMENT_API = ACTIVITY_API + "/:id/comment";
export const GET_ACTIVITY_API = ACTIVITY_API + "/:id";
export const ACTIVITY_LINK_PREVIEW_API =
  ACTIVITY_API + "/link-preview?url=:url";
export const MEMBER_API = baseUrl + "/wp-json/buddyboss/v1/members";
export const MEMBER_AVATAR = MEMBER_API + "/:user_id/avatar";
export const MEMBER_COVER = MEMBER_API + "/:user_id/cover";
export const DELETE_MEMBER = MEMBER_API + "/:id";
export const MEMBER_ACTION = MEMBER_API + "/action/:user_id";
export const MEMBER_DETAIL = MEMBER_API + "/:id/detail";
export const ALL_MEMBERS_DETAILS = MEMBER_API + "/details";
export const MEMBER_PROFILE_DROPDOWN = MEMBER_API + "/profile-dropdown";
