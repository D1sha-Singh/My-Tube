import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { YOUTUBE_CHANNEL_API } from '../utils/constants';
import { setChannelData } from '../utils/channelSlice'


const VideoCard = ({ info }) => {
    const { snippet = {}, statistics = {} } = info;
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const themeDark = useSelector(store => store?.theme?.themeDark)
    const { thumbnails = {}, channelTitle = '', title = '', liveBroadcastContent = '', channelId = '' } = snippet
    const { medium: { url : mediumUrl }, high: { url: highUrl } } = thumbnails 
    const url = isMenuOpen ? mediumUrl : highUrl
    // const titleLink = channelTitle.split(' ').join('');
    const { viewCount = '0' } = statistics
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const channelData = useSelector(store => store?.channel?.channelData);
    console.log('disha ch', channelData);
    
    const getViewsString = () => {
        if(viewCount === '0') return null
        if(viewCount.length > 6) return `${viewCount[0]}.${viewCount[1]}M views`
        else if(viewCount.length > 5) return`${viewCount[0]}.${viewCount[1]}K views`
        else return `${viewCount} views`
    }

    // const navigation = async () => {
    //     const data = await fetch(YOUTUBE_CHANNEL_API(channelId))
    //     const json = await data.json();
    //     dispatch(setChannelData(json?.items));
    //     navigate(channelData?.snippet?.customUrl)
    // }

    return (
        <div className='space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg'>
            <img
                className='rounded-lg'
                alt="thumbnail" src={url} />
            {/* <div className='px-2 '> */}
                <h3 className={`font-bold ${themeDark ? 'text-white' : 'text-black'} md: w-[17rem]`}>{title}</h3>
                <div className="items-center text-xs font-semibold text-gray-500">
                    <p>{channelTitle}</p>
                    <p>{liveBroadcastContent === 'none' && getViewsString()}</p>
                </div>
            {/* </div> */}
        </div>
    )
}

export default VideoCard