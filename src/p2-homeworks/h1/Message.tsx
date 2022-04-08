import React from 'react'
import {MessageDataPropsType} from "./HW1";
import c from "./Message.module.css"

function Message(props: MessageDataPropsType) {
    return (
         <div className={c.wrapper}>
             <img src={props.avatar}/>
             <div className={c.messageWrapper}>

                 <div className={c.message}>
                     <div className={c.name}>
                         <p>{props.name}</p>
                     </div>
                     <div className={c.text}>
                         {props.message}
                     </div>
                     <div className={c.date}>
                         <p>{props.time}</p>
                     </div>
                 </div>
             </div>
         </div>
    )
}

export default Message
