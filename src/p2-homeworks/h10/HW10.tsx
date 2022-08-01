import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import c from './HW10.module.css'
import {useDispatch, useSelector} from "react-redux";
import { loadingAC} from "./bll/loadingReducer";
import  {AppStoreType} from "./bll/store";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    //const loading = false
    const dispatch = useDispatch()

    const setLoading = () => {

        dispatch(loadingAC( true));
        setTimeout(()=>{
             dispatch(loadingAC( false))
         }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={c.loader}></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
