import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import c from "../c8-SuperDoubleRange/SuperDoubleRange.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    setValue1: (value: number) => void
    value1: number
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className, setValue1, value1,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
        if (e.currentTarget.value) {
            setValue1(Number(e.currentTarget.value))
        }

    }
    const myStyles = {
        position: 'absolute',
        width: "100%",
        height: "5px",
        margin: "auto",
        top: "0px",
        bottom: "0px",
        borderRadius: "5px",
        background: `linear-gradient(to right, #dadae5 ${value1}% , #7e7f80 ${value1}% )`
    } as React.CSSProperties;
    //const finalRangeClassName = `${s.range} ${className ? className : ''}`

    return (
        <>
            <div className={c.wrapper}>

                <div className={c.values}>
            <span>
                {value1}
            </span>
                </div>

                <div className={c.container}>
                    <div style={myStyles}>{}</div>
                    <input
                        type={'range'}
                        onChange={onChangeCallback}
                        className={c.inputRange}
                        value={value1}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                </div>
            </div>
        </>
    )
}

export default SuperRange
