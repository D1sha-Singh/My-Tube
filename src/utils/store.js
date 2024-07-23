import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        videos: videosSlice
    }
});

export default store;