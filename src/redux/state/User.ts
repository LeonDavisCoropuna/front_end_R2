import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User.model";
import { decodeToken,tokenKey } from "../../utils/decodeToken.utils";
export const UserEmptyState: User = {
  username: "",
  roles: [],
  exp: 0,
  iat:0
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
