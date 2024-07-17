import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: 'Disha Singh Ji',
                    message: 'Thank you being a good teacher Akshay!💕'
                })
            )
        }, 1500);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <>
            <div className='w-full h-[500px] ml-2 p-2 flex flex-col-reverse overflow-scroll overflow-y-hidden border border-black bg-slate-100 rounded-lg'>
                {chatMessages.map((chat, index) => <ChatMessage
                    // do not use indexes as keys
                    key={index.toString()}
                    name={chat.name}
                    message={chat.message}
                />)
                }
            </div>
            <form
                className='w-full p-2 ml-2 border border-black'
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(
                        addMessage({
                            name: 'Disha Singh Ji',
                            message: liveMessage
                        })
                    )
                }}
            >
                <input
                    className='w-96 px-2'
                    type='text'
                    value={liveMessage}
                    onChange={(e)=> setLiveMessage(e.target.value)}
                />
                <button className='px-2 mx-2 bg-green-100'> Send</button>
            </form>
        </>
    )
}

export default LiveChat