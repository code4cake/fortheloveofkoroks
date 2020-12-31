import * as React from  'react'

type BtnProps = {
  btnText: string,
  onClick?: () => void,
  role: string,
  className?: string,
}

const Button: React.FC<BtnProps>  = ({btnText, className, role="button", onClick, ...props }) => {
  return (<button role={role} className={className} onClick={onClick} {...props}>{btnText}</button>)
}

export default Button