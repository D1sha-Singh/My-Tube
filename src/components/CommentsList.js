import React from "react"
import Comment from "./Comment"

const CommentsList = ({ commentsData }) => {
   
    return commentsData.map((item, index) => {
        const { snippet } = item || {}
        const { topLevelComment } = snippet || {}
        const { snippet: snippetObj } = topLevelComment || {}
        return (
            <div>
                <Comment comment={snippetObj} key={index} />
                {/* <div className='pl-5 border border-l-black'>
                    <CommentsList key={index} commentsData={item.replies} />
                </div> */}
            </div>
        )
    })
}

export default CommentsList