import React from "react"
import Comment from "./Comment"

const CommentsList = ({ commentsData }) => {
   
    return commentsData.map((item, index) => {
        const { snippet } = item || {}
        const { topLevelComment } = snippet || {}
        const { snippet: snippetObj } = topLevelComment || {}
        return (
            <div>
                <h1 className='px-5 py-3 font-bold text-2xl'>Comments:</h1>
                <Comment comment={snippetObj} key={index} />
                {/* <div className='pl-5 border border-l-black'>
                    <CommentsList key={index} commentsData={item.replies} />
                </div> */}
            </div>
        )
    })
}

export default CommentsList