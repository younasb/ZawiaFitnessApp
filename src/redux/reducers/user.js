import { userConstants } from '../constants';

const initialState = {
  info: {}
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SET_USER_INFO:
      return {
        ...state,
        info: {
          ...state.info,
          ...action.payload
        }
      };

    default:
      return state;
  }
};

export default user;
