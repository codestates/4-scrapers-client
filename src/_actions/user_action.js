import User from "../service/user";
import axios from "axios";
import { USER_SIGNIN, USER_SIGNUP, USER_SIGNOUT } from "./types";

const httpClient = axios.create({
  baseURL: "http://52.79.228.106",
});

const user = new User(httpClient);

export const userSignIn = (userLoginInfo) => {
  const result = user.userSignIn(userLoginInfo);

  return {
    type: USER_SIGNIN,
    payload: result,
  };
};
export const userSignUp = (userRegisterInfo) => {
  const result = user.userSignUp(userRegisterInfo);

  return {
    type: USER_SIGNUP,
    payload: result,
  };
};

export const usersignout = (data) => ({
  type: USER_SIGNOUT,
  data,
});
