import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { thumbnails, channelTitle, title, liveBroadcastContent } = snippet

    return (
        <div className='space-y-2 mb-2 md:w-[19.5rem] md:m-2 md:my-3 cursor-pointer p-1 rounded-lg'>
            <img
                className='rounded-lg'
                alt="thumbnail" src={thumbnails.medium.url} />
            <div className='flex flex-col px-2 md:flex-row'>
                <h2 className="font-semibold">{title}</h2>
                <div className="flex items-center text-xs font-semibold text-gray-500">
                    <p>{channelTitle}</p>
                    <p>{liveBroadcastContent === 'none' && statistics.viewCount}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard