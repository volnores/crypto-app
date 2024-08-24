import { TextField, Button, Typography } from "@mui/material"
import { IPropsLogin } from "../../../common/types/auth"
import { Link } from "react-router-dom"


const Login: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

  const {setPassword, setEmail} = props
  return (
    <>
      <Typography variant="h2" fontFamily={'Poppins'} textAlign={'center'}>Авторизация</Typography>
      <Typography variant="body1" mb={3} fontFamily={'Poppins'} textAlign={'center'}>Введите ваш логин и пароль</Typography>
      <TextField type="email" fullWidth={true} margin="normal" placeholder="Введите вашу почту" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
      <TextField type="password" fullWidth={true} margin="normal"  placeholder="Введите ваш пароль" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
      <Button type="submit" sx={{fontFamily: 'Poppins', mt: 2, mb: 2, width: '60%'}}  variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}} textAlign={'center'}>У вас нет аккаунта?<span className="incitingText"><Link to={'/register'}>Регистрация</Link></span></Typography>
    </>
  )
}

export default Login