import {createSelector} from "@reduxjs/toolkit";
import {ChatState} from "Frontend/redux/feat/chat/chatSlice";

interface PartialAuthState {
    auth: ChatState;
}

export type AccessProps = Readonly<{
    requiresLogin?: boolean;
}>;

const chatStateSelector = (state: PartialAuthState) => state.auth;

export const ChatSelectors = {
    chatStateSelector,
    getMessages: () => createSelector(chatStateSelector, ({messages}) => messages),
};