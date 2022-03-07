import React from 'react'
import {AffairType} from "./HW2";
import c from "./Affair.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={c.affairWrap}>
            <div className={c.text}>
            {props.affair.name} <span>{props.affair.priority}</span>

            <button className={c.ButtonAf} onClick={deleteCallback}>X</button>
            </div>
        </div>
    )
}

export default Affair
