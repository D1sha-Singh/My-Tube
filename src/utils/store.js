import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from './searchSlice'
import chatSlice from "./chatSlice";
import videosSlice from "./videosSlice";
import themeSlice from "./themeSlice";
import channelSlice from "./channelSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
        videos: videosSlice,
        theme: themeSlice,
        channel: channelSlice
    }
});

export default store;