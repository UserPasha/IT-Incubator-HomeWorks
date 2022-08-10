import React, {ChangeEvent, useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {juniorApi} from "./API/API";
import c from "./Request.module.css"


const Request = () => {
    const [request, setRequest] = useState<string>("")

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const handleRequest=()=> {
        juniorApi.request(checked)
            .then(response => response.data)
            .then(data => setRequest(data.errorText))
            .catch ((error)=> {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
                setRequest(error.response ? error.response.data.errorText : error.message)
            })

    }
    return (
        <div className={c.wrapper}>
            <SuperButton onClick={handleRequest}>REQUEST</SuperButton>
            <SuperCheckbox checked={checked} onChange={testOnChange}/>
            <div className={c.container}>
                {request}
            </div>

        </div>
    );
};

export default Request;