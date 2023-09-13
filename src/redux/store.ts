import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./state/User";
export interface AppStore{
    user: any
}
export default configureStore<AppStore>({
    reducer:{
        user: userSlice.reducer
    }
})