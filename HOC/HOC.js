import React, { useState } from 'react'


export default function HOC(Component, data) {
 
   

    return function(){
      
        const [count,setCount] = useState(43);

        {
            return (
                <div>
                      sd<Component count={this.count}/>
                </div>
            )
        }
    }
    
}
