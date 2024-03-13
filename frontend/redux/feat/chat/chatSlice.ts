import {Action, createSlice, PayloadAction} from "@reduxjs/toolkit";
import Message from "Frontend/generated/com/example/application/models/Message";

export type ChatState = {
    messages: (Message | undefined)[],
    loading: boolean
}
const initialState: ChatState = {
    messages: [],
    loading: false
};
export const chatSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMessages(state, action: PayloadAction<(Message|undefined)[]>) {
            state.messages = action.payload;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    },
});

export const ChatActions = chatSlice.actions;