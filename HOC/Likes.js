import React, {useState} from 'react'
import HOC from './HOC'
    function Likes(props) {
   
    return (
        <div>
             <h4>{props.count}</h4>
                <button >Like</button>
        </div>
    )
}


const NewLikes = HOC(Likes,45);

export default NewLikes;