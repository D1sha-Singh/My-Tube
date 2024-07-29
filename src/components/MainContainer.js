import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import ButtontList from './ButtonList'
import { useSelector } from 'react-redux'
import VideoContainer from './VideoContainer'
import { VideoContext } from '../utils/helpers';

const MainContainer = () => {
  const [videos, setVideos] = useState([]);
  const themeDark = useSelector(store => store?.theme?.themeDark)
  const value = { videos, setVideos }

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    console.log(YOUTUBE_VIDEOS_API)
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }
  console.log(videos)
  return (
    <div className={`grid grid-flow-row ${themeDark ? 'bg-black' : 'none'}`}>
    <VideoContext.Provider value={value}>
      <ButtontList />
      <VideoContainer />
    </VideoContext.Provider>
    </div>
  )
}

export default MainContainer