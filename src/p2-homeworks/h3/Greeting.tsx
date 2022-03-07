import React, {useState, ChangeEvent, KeyboardEvent, MouseEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPressCallback} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass // need to fix with (?:)

    return (
        <div className={s.wrapper}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={keyPressCallback}

            />
            {/*   <span>{error}</span>*/}
            <button onClick={addUser} disabled={name.trim() === ""}>add</button>


            <span>{totalUsers}</span>
            {error && <div className={s.error}>{error}</div>}

        </div>
    )
}

export default Greeting
