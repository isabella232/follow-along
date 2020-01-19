import * as actionTypes from "../utils/actionTypes";
import AuthService from '../../services/AuthService'

const authService = new AuthService();

const initialState = { login: authService.userAuthenticated() };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      const newState = { ...state };
      newState.login = true;
      return newState;
    }
    case actionTypes.LOGOUT: {
      const newState = { ...state };
      newState.login = false;
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
