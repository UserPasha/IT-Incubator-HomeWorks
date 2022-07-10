import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)


    const stop = () => {
        //clearInterval(timerId)
        window.clearInterval(timerId)   ////////////////////////
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())        //setDate///////////////////
        }, 1000)
        setTimerId(id)
        console.log(id)

        // setWatch(true)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    //console.log(date)

    // const a = date.toLocaleTimeString()

    //refactor after kabzda23
    const setDuplexDigits = (num: number)=> num > 9? num : '0'+ num

    const refactedHours = setDuplexDigits(date.getHours())
    const refactedMinutes = setDuplexDigits(date.getMinutes())
    const refactedSeconds = setDuplexDigits(date.getSeconds())

    // const refactedHours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours()
    // const refactedMinutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
    // const refactedSeconds = date.getSeconds()> 9 ? date.getSeconds() : "0" + date.getSeconds()


    const stringTime = `${refactedHours} : ${refactedMinutes} : ${refactedSeconds}` // fix with date

    // const stringDate = `${date.getDate()} : ${date.getMonth() + 1} :${date.getFullYear()}` // fix with date
    const stringDate = date.toLocaleDateString()

    return (
        <div>
            <div className={c.clockWrapper}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                {stringTime}

            </div>

            {show ? (
                <div className={c.dateWrapper}>
                    {stringDate}
                </div>
            ) : (
                <div className={c.slim}>
                    DATE
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
