import React from 'react'

const Comment = ({ comment }) => {
    const { textDisplay = '', authorDisplayName = '' } = comment
    
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg gap-4 my-4'>
            <img
                className='w-12 h-12'
                alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />

            <div className='px-3'>
                <p className='font-bold'>{authorDisplayName}</p>
                <p>{textDisplay}</p>
            </div>

        </div>
    )
}

export default Comment