
const CTAButton = (props) => {
  return (
    <button {...props}>
      {props.children}
    </button>
  )
}

const Button = (props) => {
  return (
    <CTAButton {...props}>{props.children}</CTAButton>
  )
}

export default Button
