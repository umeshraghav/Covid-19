import React, {useState} from 'react'

export default function Comment() {
    const [comments, setcomments] = useState(0);
    return (
        <div>
             <h4>{comments}</h4>
                <button onClick={()=>setcomments(comments+1)}>Comment</button>
        </div>
    )
}
