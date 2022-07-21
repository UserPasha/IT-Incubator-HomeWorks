import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';
import c from "./RangeRange.module.css"

const RangeRange = () => {
    let [valueOne, setValueOne] = useState(0)
    let [valueTwo, setValueTwo] = useState(100)
    let minGap = 0


    const myStyles = {
        position: 'absolute',
        width: "100%",
        height: "5px",
        margin: "auto",
        top: "0px",
        bottom: "0px",
        borderRadius: "5px",
        background: `linear-gradient(to right, #dadae5 ${valueOne}% , #7e7f80 ${valueOne}% , #0c0c0c ${valueTwo}%, #dadae5 ${valueTwo}%)`
    } as React.CSSProperties;


    const handleFirstValue = (e: ChangeEvent<HTMLInputElement>) => {


        setValueOne(+e.currentTarget.value)
    }
    const handleSecondValue = (e: ChangeEvent<HTMLInputElement>) => {


        setValueTwo(+e.currentTarget.value)
    }


    return (
        <div>
            <div className={c.wrapper}>
                <div className={c.values}>
            <span>
                {valueOne}
            </span>
                    <span> ------- </span>
                    <span>
                {valueTwo}
            </span>
                </div>
                <div className={c.container}>
                    <div className="sliderTrackName" style={myStyles}>{}</div>
                    <input className={c.inputRange} type="range" value={valueOne} onChange={handleFirstValue}/>
                    <input className={c.inputRange} type="range" value={valueTwo} onChange={handleSecondValue}/>
                </div>
            </div>
        </div>
    );
};

export default RangeRange;