import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const liveChatId = useSelector(store => store?.chat?.liveChatId)

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

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
                    {liveChatId !== '' ? <LiveChat /> : null}
                </div>
            </div>
            {liveChatId === '' ? <CommentsContainer videoId={videoId} /> : null}
        </div >
    )
}

export default WatchPage