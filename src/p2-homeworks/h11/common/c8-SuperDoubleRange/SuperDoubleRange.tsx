import React, {ChangeEvent} from 'react'
import c from "./SuperDoubleRange.module.css"

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    value1: number
    value2: number
    setValue1: (value: number) => void
    setValue2: (value: number) => void
    min: number
    max: number
    step: number
    disable: boolean
    setDisable: (disable: boolean) => void
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, setValue1, setValue2, value1, value2,
        min, max, step, disable, setDisable
        , ...restProps
    }
) => {
    // сделать самому, можно подключать библиотеки


    const myStyles = {
        position: 'absolute',
        width: "100%",
        height: "5px",
        margin: "auto",
        top: "0px",
        bottom: "0px",
        borderRadius: "5px",
        background: `linear-gradient(to right, #dadae5 ${value1}% , #7e7f80 ${value1}% , #0c0c0c ${value2}%, #dadae5 ${value2}%)`
    } as React.CSSProperties;


    const handleFirstValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue1(+e.currentTarget.value)
    }
    const handleSecondValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue2(+e.currentTarget.value)
    }


    return (
        <>
            <div>
                <div className={c.wrapper}>
                    <div className={c.values}>
            <span>
                {value1}
            </span>
                        <span> --- </span>
                        <span>
                {value2}
            </span>
                    </div>

                    <div className={c.container}>
                        <div style={myStyles}>{}</div>

                        <input className={c.inputRange} type="range" value={value1}
                               onChange={handleFirstValue}/>
                        <input className={c.inputRange} type="range" value={value2}
                               onChange={handleSecondValue}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SuperDoubleRange
