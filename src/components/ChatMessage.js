import React from 'react'

const ChatMessage = ({ name, message, imgUrl }) => {
    return (
        <div className='flex items-center gap-2  p-2 '>
            <img
                className='h-8'
                alt="user-icon" src={imgUrl} />
            <span className='font-bold px-4 '>{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage