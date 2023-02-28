import React from 'react'
import ProTyeps from "prop-types"
import "../../pages/Css/global.css"

const Button = ({ children, classes, type, disable, click }) => {
  return (
    <button className={`add-btn ${classes}`} type={type} disabled={disable} onClick={click}>{children}</button>
  )
}
Button.defaultProps = {
  type: "button",
  disabled: false,
}
Button.proTyeps = {
  children: ProTyeps.node,
  type: ProTyeps.string,
  disabled: ProTyeps.bool,
}


export default Button