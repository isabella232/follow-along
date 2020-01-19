import * as actionTypes from "../utils/actionTypes";

export const login = () => {
  return {
    type: actionTypes.LOGIN
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT
  };
};
