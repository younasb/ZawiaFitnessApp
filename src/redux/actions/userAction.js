import { userConstants } from '../constants';

export const setUserInfo = payload => ({
  payload,
  type: userConstants.SET_GENDER
});
