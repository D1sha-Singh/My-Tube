import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import CommentsList from './CommentsList';

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

const CommentsContainer = ({ videoId }) => {
    const [commentsData, setCommentsData] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        console.log("comments api " + YOUTUBE_COMMENTS_API(videoId))
        const data = await fetch(YOUTUBE_COMMENTS_API(videoId))
        const json = await data.json();
        setCommentsData(json?.items || [])
        // console.log("disha comments data " + json?.items || [])
    }

    return (
        <div className='m-5 p-2'>
            <CommentsList commentsData={commentsData} />
        </div>
    )
}

export default CommentsContainer