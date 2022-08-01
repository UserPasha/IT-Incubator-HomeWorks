import React, {useState} from "react";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, colorType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'some', 'white'];


function HW12() {
    const theme = useSelector<AppStoreType, colorType>(state => state.theme.themes)

    const dispatch = useDispatch()

    const onChangeOption = (value: colorType) => {
        dispatch(changeThemeC(value))
    }
    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                THEMES
            </span>

            {/*should work (должно работать)*/}
            <SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}/>

            <hr/>
        </div>
    );
}

export default HW12;
