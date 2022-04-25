import React from "react"

function Emoji({time}){
    let emojiString = ''
    if(time < 30){
        let numEmojis = Math.ceil(time/5)
        for(let i = 0; i < numEmojis; i++){
            emojiString += '☕️'
        }
        emojiString += ` ${time} min read`
    }else if(time > 30){
        let numEmojis = Math.ceil(time/10)
        for(let i = 0; i < numEmojis; i++){
            emojiString += '☕️'
        }
        emojiString += ` ${time} min read`
    }
    
    return(
        <p>{emojiString}</p>
    )
}

export default Emoji