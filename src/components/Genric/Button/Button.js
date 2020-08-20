import React, { Fragment, memo } from 'react'
import './Button.css'

// Generic button component==>

const Button = ({label='',onClickHandler, customClass }) => {
    return (
        <Fragment>
            <button className={customClass} onClick={() => onClickHandler()} >{label}</button>
        </Fragment>
    )
}
export default memo(Button);