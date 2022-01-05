import React, { Component } from 'react'
import style from './Nav.module.css'
import Input from '../Input/Input'


class Navbar extends Component {
    render() {
        return (
            <>
            <div className={style.Navbar}>
                <button className={style.btn}></button>
                <Input
                type='text'
                name='food'
                id='food'
                placeholder='Food Items'
                />
            </div>
            </>
        )
    }
}

export default Navbar
