import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User.model";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode"
import { decodeToken,tokenKey } from "../../utils/decodeToken.utils";
export const UserEmptyState: User = {
  username: "",
  isLogged: false,
  roles: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState: decodeToken(tokenKey) || UserEmptyState,
  reducers: {
    createUser: (state, action) => action.payload,  
    resetUser: () => UserEmptyState,  
  },
});

export const { createUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
