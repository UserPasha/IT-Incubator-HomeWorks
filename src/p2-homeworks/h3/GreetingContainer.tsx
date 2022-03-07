import React, {useState, ChangeEvent, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    let [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {// need to fix any
        setName(e.currentTarget.value)
    }
    const keyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {// need to fix any
        setError("")
        if (e.charCode === 13) {
            if (name.trim() !== "") {
                addUserCallback(name)
                alert(`Hello ${name}!`)
                setName("")
                setError("")
            } else {
                setError("Enter yor name!")
            }
        }
    }

    const addUser = () => {
        setError("")
        if (name.trim() !== "") {
            addUserCallback(name)
            alert(`Hello ${name}!`) // need to fix
            setName("")
        } else {
            setError("Enter yor name!")
        }
    }

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            keyPressCallback={keyPressCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
