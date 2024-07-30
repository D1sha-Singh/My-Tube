import React from 'react'
import { useSelector } from 'react-redux';


const VideoCard = ({ info }) => {
    const { snippet = {}, statistics = {} } = info;
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const themeDark = useSelector(store => store?.theme?.themeDark)
    const { thumbnails = {}, channelTitle = '', title = '', liveBroadcastContent = '' } = snippet
    const { medium: { url : mediumUrl }, high: { url: highUrl } } = thumbnails 
    const url = isMenuOpen ? mediumUrl : highUrl
    const { viewCount = '0' } = statistics
    // const channelData = useSelector(store => store?.channel?.channelData);
    
    const getViewsString = () => {
        if(viewCount === '0') return null
        if(viewCount.length > 6) return `${viewCount[0]}.${viewCount[1]}M views`
        else if(viewCount.length > 5) return`${viewCount[0]}.${viewCount[1]}K views`
        else return `${viewCount} views`
    }

    return (
        <div className='space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg border border-zinc-400'>
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