import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useLocation, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { YOUTUBE_LIVE_CHAT_ID } from '../utils/constants';
import { addMessage } from '../utils/chatSlice'
import { YOUTUBE_LIVE_CHAT_MESSAGES } from '../utils/constants'

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const liveChatId = useSelector(store => store?.chat?.liveChatId)
    console.log("live chat id from lc"+ liveChatId)

    useEffect(() => {
        dispatch(closeMenu());
    }, []);
    
    /* live chat messages code starts here

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

    live chat messages code ends here */
    
  return (
        <div className='flex flex-col '>
            <div className='px-5 flex'>
                <div>
                    <iframe
                        width="1000"
                        height="500"
                        src={"https://www.youtube.com/embed/" + videoId + "?autoplay=1"}
                        title="YouTube video player"
                        frameBorder="0"
                        autoPlay
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    {liveChatId != '' ? <LiveChat /> : null}
                </div>
            </div>
            {liveChatId === '' ? <CommentsContainer videoId={videoId} /> : null }
        </div >
    )
}

export default WatchPage