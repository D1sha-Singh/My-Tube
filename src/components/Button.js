import React, { useContext } from 'react'
import { YOUTUBE_LIVE_VIDEOS, YOUTUBE_MOST_POPULAR_VIDEOS, YOUTUBE_VIDEOS_API } from '../utils/constants'
import { VideoContext } from '../utils/helpers'

const Button = (props) => {
  const { setVideos } = useContext(VideoContext);

  const getVideos = async () => {
    let data;      
    if (props.name === 'Live')
      data  = await fetch(YOUTUBE_LIVE_VIDEOS);
    else if(props.name === 'Trending')
      data = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS);
    else data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  }

  return (
    <div>
        <button className='px-5 py-1 m-2 bg-gray-100 rounded-xl' onClick={getVideos}>{props.name}</button>
    </div>
  )
}

export default Button