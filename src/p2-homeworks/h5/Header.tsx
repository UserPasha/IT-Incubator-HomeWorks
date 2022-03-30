import React from 'react'
import {NavLink} from 'react-router-dom'
import c from './Header.module.css'


function Header() {
    return (
        <div className={c.menu}>
            <div className={c.links}>
            <NavLink to={'/pre-junior'}
                     style={(params) => {
                         return {color: params ? '#06c9fa' : '#a3aaba'}
                     }}>Pre Junior---</NavLink>

            <NavLink to={'/junior'}
                     style={(params) => {
                         return {color: params ? '#06c9fa' : '#a3aaba'}
                     }}>Junior---</NavLink>

            <NavLink to={'/junior-plus'}
                     style={(params) => {
                         return {color: params ? '#06c9fa' : '#a3aaba'}
                     }}>Junior Plus</NavLink>
            </div>
        </div>
    )
}

export default Header
