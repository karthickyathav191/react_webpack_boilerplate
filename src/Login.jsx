import Button from './components/Button'

const Login = ({ handleClick, data }) => {

  return (
    <Button onClick={() => handleClick('Hell')} className={"btn"}>Click</Button>
  )
}

export default Login
