import axios from 'axios';
import { USER_LIST } from '../../ActionType';

export const userListAction = () => async (dispatch) => {
  try {
    const GET_LIST = 'https://jsonplaceholder.typicode.com/users';

    axios.get(GET_LIST).then(function (response) {
      dispatch({
        type: USER_LIST,
        payload: response.data,
      });
    });
  } catch (err) {
    throw new Error(err);
  }
};
