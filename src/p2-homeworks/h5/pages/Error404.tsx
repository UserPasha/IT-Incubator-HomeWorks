import React from 'react'
import c from "./Error404.module.css"

function Error404() {
    return (
        <div className={c.wrapper}>
            <div className={c.digits}>404</div>
            <div className={c.text}>Page not found!</div>
            <div className={c.smile}>&#9757;</div>
        </div>
    )
}

export default Error404
