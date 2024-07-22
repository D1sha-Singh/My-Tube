import { createContext } from "react"

export const VideoContext = createContext({
    videos: [],
    setVideos: () => {}
});