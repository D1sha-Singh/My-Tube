const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key="+ GOOGLE_API_KEY

export const YOUTUBE_MOST_POPULAR_VIDEOS = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_LIVE_CHAT_ID = (videoId) => `https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&id=${videoId}&key=` + GOOGLE_API_KEY

export const YOUTUBE_LIVE_CHAT_MESSAGES = (liveChatId) => `https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=${liveChatId}&part=snippet,authorDetails&maxResults=2000&key=`+ GOOGLE_API_KEY

export const YOUTUBE_LIVE_VIDEOS = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=25&q=news&type=video&key=" + GOOGLE_API_KEY

export const YOUTUBE_COMMENTS_API = (videoId) => `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=` + GOOGLE_API_KEY

export const OFFSET_LIVE_CHAT = 10;