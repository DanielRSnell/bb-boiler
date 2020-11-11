const baseUrl = 'http://localhost:5000';

export const ACTIVITY_API = baseUrl + '/wp-json/buddyboss/v1/activity';
export const ACTIVITY_DETAILS_API = ACTIVITY_API + '/details';
export const ACTIVITY_FAVORITE_API = ACTIVITY_API + '/:id/favorite';
export const ACTIVITY_COMMENT_API = ACTIVITY_API + '/:id/comment';
export const GET_ACTIVITY_API = ACTIVITY_API + '/:id';
export const ACTIVITY_LINK_PREVIEW_API = ACTIVITY_API + '/link-preview?url=:url';
