import React, { useContext, useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API, YOUTUBE_LIVE_CHAT_ID, YOUTUBE_LIVE_CHAT_MESSAGES } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLiveChatId, addMessage } from '../utils/chatSlice'
import { VideoContext } from '../utils/helpers';

const VideoContainer = () => {
  // const [videos, setVideos] = useState([]);
  const { videos } = useContext(VideoContext);
  const liveChatId = useSelector(store => store?.chat?.liveChatId)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getVideos();
  // }, []);

  // const getVideos = async () => {
  //   console.log(YOUTUBE_VIDEOS_API)
  //   const data = await fetch(YOUTUBE_VIDEOS_API);
  //   const json = await data.json();
  //   // console.log("video"+json.items);
  //   setVideos(json.items);
  // }

  const getLiveVideoId = async (videoId) => {
    // const currentVideoId = location.search.substring(3)
    // console.log(videoId+" "+currentVideoId)
    alert('called')
    const data = await fetch(YOUTUBE_LIVE_CHAT_ID(videoId))
    const json = await data.json();
    console.log("video"+json?.items);
    dispatch(setLiveChatId(json?.items?.[0]?.liveStreamingDetails?.activeLiveChatId || ''))
    console.log("live chat id from vc"+ liveChatId)
  }

  const getVideoId = (video) => {
    if(video.snippet.liveBroadcastContent === 'live') return video?.id?.videoId;
    return video?.id;
  }

  
  useEffect(() => {
    // getLiveChatMessages()
    const interval = setInterval(() => {
        getLiveChatMessages()
    }, 1500);
    return () => {
        clearInterval(interval);
    }
}, [])

const getLiveChatMessages = async () => {
    console.log("messages api " + YOUTUBE_LIVE_CHAT_MESSAGES(liveChatId))
    const data = await fetch(YOUTUBE_LIVE_CHAT_MESSAGES(liveChatId));
    const json = await data.json();
    
    json?.items?.map(item => dispatch(
        addMessage({
            name: item?.authorDetails?.displayName,
            message: item?.snippet?.displayMessage || '',
            imgUrl: item?.authorDetails?.profileImageUrl
        })
    ))
}

  return (
    <div className='flex flex-wrap'>
      {videos && videos.map(video => {

      console.log('disha video ' + video)
        return (<Link to={"/watch?v=" + getVideoId(video)} onClick={() => getLiveVideoId(getVideoId(video))}>
          <VideoCard key={video.id} info={video} />
        </Link>)
      }
      )}
    </div>
  )
}

export default VideoContainer