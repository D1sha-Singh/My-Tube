import React from 'react'

const commentsData = [
    {
        name: 'Disha Singh',
        text: 'Har Har Mahadev!',
        replies: [
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    },
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [

                ]
            }
        ]
    },
    {
        name: 'Disha Singh',
        text: 'Har Har Mahadev!',
        replies: [
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    },
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [

                ]
            }
        ]
    },
    {
        name: 'Disha Singh',
        text: 'Har Har Mahadev!',
        replies: [
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    },
                    {
                        name: 'Disha Singh',
                        text: 'Har Har Mahadev!',
                        replies: [

                        ]
                    }
                ]
            },
            {
                name: 'Disha Singh',
                text: 'Har Har Mahadev!',
                replies: [

                ]
            }
        ]
    }
]

const Comment = ({ comment }) => {
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img
                className='w-12 h-12'
                alt="user-icon" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />

            <div className='px-3'>
                <p className='font-bold'>{comment.name}</p>
                <p>{comment.text}</p>
            </div>

        </div>
    )
}

const CommentsList = ({ commentsData }) => {
    return commentsData.map((item, index) => (
        <div>
            <Comment comment={item} key={index} />
            <div className='pl-5 border border-l-black'>
                <CommentsList key={index} commentsData={item.replies} />
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='px-5 py-3 font-bold text-2xl'>Comments:</h1>
            <CommentsList commentsData={commentsData} />
        </div>
    )
}

export default CommentsContainer