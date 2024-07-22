import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
        liveChatId: ''
    },
    reducers: {
        addMessage: (state, action) => {
            if(state.messages.length > 200)
                state.messages.slice(OFFSET_LIVE_CHAT, 1);
            state.messages.push(action.payload);
        },
        setLiveChatId: (state, action) => {
            state.liveChatId = action.payload
        }
    },
});

export const { addMessage, setLiveChatId } = chatSlice.actions;
export default chatSlice.reducer