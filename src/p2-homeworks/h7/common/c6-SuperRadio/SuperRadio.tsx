import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import c from "./SuperRadio.module.css"
import {log} from "util";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)

    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <div key={name + '-' + i} className={c.item}>
            <label htmlFor={o}>
                {o}
            </label>
            <input
                type='radio'
                onChange={onChangeCallback}
                name={o}
                id={o}
                value={o}
                checked={o === value}
                // name, checked, value, onChange
            />
        </div>
    )) : []


    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
