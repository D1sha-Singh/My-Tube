import React, { useCallback, useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS_API } from '../utils/constants';
import CommentsList from './CommentsList';

// const commentsData = [
//     {
//         name: 'Disha Singh',
//         text: 'Har Har Mahadev!',
//         replies: [
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     },
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [

//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Disha Singh',
//         text: 'Har Har Mahadev!',
//         replies: [
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     },
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [

//                 ]
//             }
//         ]
//     },
//     {
//         name: 'Disha Singh',
//         text: 'Har Har Mahadev!',
//         replies: [
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     },
//                     {
//                         name: 'Disha Singh',
//                         text: 'Har Har Mahadev!',
//                         replies: [

//                         ]
//                     }
//                 ]
//             },
//             {
//                 name: 'Disha Singh',
//                 text: 'Har Har Mahadev!',
//                 replies: [

//                 ]
//             }
//         ]
//     }
// ]

const CommentsContainer = ({ videoId }) => {
    const [commentsData, setCommentsData] = useState([]);

    const getComments = useCallback(async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API(videoId))
        const json = await data.json();
        setCommentsData(json?.items || [])
    }, [videoId, setCommentsData])

    useEffect(() => {
        getComments();
    }, [getComments]);

    return (
        <div className='m-5 p-2'>
            <CommentsList commentsData={commentsData} />
        </div>
    )
}

export default CommentsContainer