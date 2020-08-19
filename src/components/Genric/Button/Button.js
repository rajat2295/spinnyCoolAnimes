import React, { Fragment } from 'react'
import './Button.css'
const Button = ({label='',onClickHandler, customClass }) => {


    return (
        <Fragment>
            <button className={customClass} onClick={() => onClickHandler()} >{label}</button>
        </Fragment>
    )
}
export default Button;