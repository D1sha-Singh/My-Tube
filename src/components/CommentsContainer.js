import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
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
    const themeDark = useSelector(store => store?.theme?.themeDark)

    const getComments = useCallback(async () => {
        const data = await fetch(YOUTUBE_COMMENTS_API(videoId))
        const json = await data.json();
        setCommentsData(json?.items || [])
    }, [videoId, setCommentsData])

    useEffect(() => {
        getComments();
    }, [getComments]);

    return (
        <div className={`m-5 p-2 w-full h-full ${themeDark ? 'bg-black' : 'none'}`}>
            <h1 className={`flex gap-4 my-4 px-5 py-3 font-bold text-2xl ${themeDark ? 'text-white' : 'text-black'}`}>Comments:</h1>
            <CommentsList commentsData={commentsData} />
        </div>
    )
}

export default CommentsContainer