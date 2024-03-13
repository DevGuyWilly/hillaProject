import {createSelector} from "@reduxjs/toolkit";
import {AuthState} from "./authSlice";

interface PartialAuthState {
    auth: AuthState;
}

export type AccessProps = Readonly<{
    requiresLogin?: boolean;
}>;

const authStateSelector = (state: PartialAuthState) => state.auth;

export const AuthSelectors = {
    authStateSelector,
    getCurrentUser: () => createSelector(authStateSelector, ({user}) => user),
    getAllUsers: () => createSelector(authStateSelector, ({users}) => users),
    getChattingUser: () => createSelector(authStateSelector, ({chattingUser}) => chattingUser)
};