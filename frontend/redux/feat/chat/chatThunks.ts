import {createAsyncThunk} from "@reduxjs/toolkit";
import {ChatEndPoint} from "Frontend/generated/endpoints";
import User from "Frontend/generated/com/example/application/models/User";

export const ChatThunks = {
    getMessages: createAsyncThunk("chat/get-messages", async (payload: { sender: User; receiver: User }) => {
        const {sender, receiver} = payload;
        return ChatEndPoint.getMessages(sender, receiver);
    }),
}

