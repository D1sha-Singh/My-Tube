import React, { useContext } from 'react'
import { YOUTUBE_LIVE_CHAT_ID, YOUTUBE_SEARCH_RESULT_API } from '../utils/constants'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLiveChatId } from '../utils/chatSlice'
import { VideoContext } from '../utils/helpers';
import { setVideos } from '../utils/videosSlice';

const VideoContainer = () => {
  const { videos } = useContext(VideoContext);
  const themeDark = useSelector(store => store?.theme?.themeDark)
  const dispatch = useDispatch();

  const getLiveVideoId = async (videoId) => {
    const data = await fetch(YOUTUBE_LIVE_CHAT_ID(videoId))
    const json = await data.json();
    dispatch(setLiveChatId(json?.items?.[0]?.liveStreamingDetails?.activeLiveChatId || ''))
  }

  const getVideoId = (video) => {
    if(typeof video?.id === 'object') return video?.id?.videoId
    return video?.id
  }

  const getSearchResults = async (video) => {
    const data = await fetch(YOUTUBE_SEARCH_RESULT_API + video?.snippet?.tags?.[0]);
    const json = await data.json();
    console.log('disha json ', json?.items)
    dispatch(setVideos(json?.items ?? []));
}

  const getRequiredData = (video) => {
    getLiveVideoId(getVideoId(video));
    getSearchResults(video);
  }

  return (
    <div className={`justify-items-center md:flex md:flex-wrap md:justify-center rounded ${themeDark ? 'bg-black' : 'none'}`}>
      {videos && videos.map(video => {
        return (<Link to={"/watch?v=" + getVideoId(video)} onClick={() => getRequiredData(video)}>
          <VideoCard key={video.id} info={video} />
        </Link>)
      }
      )}
    </div>
  )
}

export default VideoContainer