import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { SearchResultsPage } from './SearchResultsPage';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");
    const dispatch = useDispatch();
    const liveChatId = useSelector(store => store?.chat?.liveChatId)

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className='md:flex md:flex-wrap md:justify-center md:w-full mt-4'>
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
                    {liveChatId === '' ? <CommentsContainer videoId={videoId} /> : null}
                </div>
                <div className='hidden md:block w-3/4   h-[30rem] shadow-sm'>
                    {liveChatId !== '' ? <LiveChat /> : <SearchResultsPage source={'WatchPage'} />}
                </div>
            </div>
            
        </div >
    )
}

export default WatchPage