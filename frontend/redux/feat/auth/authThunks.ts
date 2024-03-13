import {createAsyncThunk} from "@reduxjs/toolkit";
import {logout} from "@hilla/frontend"
import {UserEndPoint} from "Frontend/generated/endpoints";

export const AuthThunks = {
    logout: createAsyncThunk("auth/logout", async () => {
        return logout()
    }),
    getAllUsers: createAsyncThunk("auth/get-all-users", async () => {
        return UserEndPoint.findAll();
    }),
}

