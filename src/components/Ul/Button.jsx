import React from 'react'
import ProTyeps from "prop-types"
import "../../pages/global.css"

const Button = ({children,classes,type,disable,click}) => {
  return (
    <button className={`btn ${classes}`} type={type} disabled={disable} onClick={click}>{children}</button>
  )
}
Button.defaultProps = {

}

export default Button