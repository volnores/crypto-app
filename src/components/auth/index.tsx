import { useLocation } from "react-router-dom"
import Login from "./login"
import Register from "./register"
import './style.scss'
import { Box } from "@mui/material"
import { useState } from "react"

const AuthRootComponent: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [userName, setUserName] = useState('')

  

  const handle = async (e: { preventDefault: () => void }) => {
   e.preventDefault
   
    //СДЕЛАТЬ АВТОРИЗАЦИЮ ЧЕРЕЗ БЭКЭНД
  }
  
    const location = useLocation()
  return (
   <div className="root">
<form onSubmit={handle} className="form">
  <Box
  display={'flex'}
  justifyContent={'center'}
  alignItems={'center'}
  flexDirection={'column'}
  maxWidth={640}
  margin={'auto'}
  padding={5}
  borderRadius={5}
  boxShadow={'5px 5px 10px #ccc'}
  >
 {
 location.pathname === '/login' ?
 <Login setEmail={setEmail} setPassword={setPassword}/> : location.pathname === '/register' ?
  <Register setEmail={setEmail} setPassword={setPassword} setRepeatPassword={setRepeatPassword} setFirstName={setFirstName} setUserName={setUserName}/> : null}
  </Box>
</form>
   </div>
  )

}

export default AuthRootComponent