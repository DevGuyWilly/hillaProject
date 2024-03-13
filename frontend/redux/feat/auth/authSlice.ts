import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthThunks} from "Frontend/redux/feat/auth/authThunks";
import User from "Frontend/generated/com/example/application/models/User";

export type AuthState = {
    user: User | undefined,
    error: boolean,
    loading: boolean,
    users: User[],
    chattingUser: User | null
}
const initialState: AuthState = {
    user: undefined,
    users: [],
    error: false,
    loading: false,
    chattingUser: null
};
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
        setChattingUser(state, action:PayloadAction<User>) {
            state.chattingUser = action.payload
        },
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthThunks.getAllUsers.fulfilled, (state, action) => {
                state.users = action.payload || []
            })
        builder
            .addCase(AuthThunks.logout.pending, (state) => {
                state.loading = true;
            })
            .addCase(AuthThunks.logout.fulfilled, (state) => {
                state.user = undefined
                state.error = false
                state.loading = false
                state.chattingUser = null
            })
    },
});

export const AuthActions = authSlice.actions;