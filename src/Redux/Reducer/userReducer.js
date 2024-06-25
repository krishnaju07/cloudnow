import { USER_LIST } from '../../Redux/ActionType/index';

const initialState = {
  userList: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LIST:
      return { ...state, userList: action.payload };

    default:
      return state;
  }
};

export default UserReducer;
