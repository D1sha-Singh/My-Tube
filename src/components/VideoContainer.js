import React, { useContext } from 'react'
import { YOUTUBE_LIVE_CHAT_ID } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLiveChatId } from '../utils/chatSlice'
import { VideoContext } from '../utils/helpers';

const VideoContainer = () => {
  const { videos } = useContext(VideoContext);
  const dispatch = useDispatch();

  const getLiveVideoId = async (videoId) => {
    const data = await fetch(YOUTUBE_LIVE_CHAT_ID(videoId))
    const json = await data.json();
    dispatch(setLiveChatId(json?.items?.[0]?.liveStreamingDetails?.activeLiveChatId || ''))
  }

  const getVideoId = (video) => {
    if (video.snippet.liveBroadcastContent === 'live') return video?.id?.videoId;
    return video?.id;
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