import { TextField, Button, Typography } from "@mui/material"
import { IPropsRegister } from "../../../common/types/auth"
import { Link } from "react-router-dom"

const Register: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const {setEmail, setFirstName, setPassword, setRepeatPassword, setUserName} = props
  return (
    <>
    <Typography variant="h2" fontFamily={'Poppins'} textAlign={'center'}>Регистрация</Typography>
    <Typography variant="body1" mb={3} fontFamily={'Poppins'} textAlign={'center'}>Введите данные для регистрации</Typography>
    <TextField fullWidth={true} margin="normal" placeholder="Введите ваше имя" label="Name" variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
    <TextField fullWidth={true} margin="normal" placeholder="Введите имя пользователя" label="User Name" variant="outlined" onChange={(e) => setUserName(e.target.value)}/>
    <TextField type="email" fullWidth={true} margin="normal" placeholder="Введите вашу почту" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
    <TextField type="password" fullWidth={true} margin="normal"  placeholder="Введите ваш пароль" label="Password" variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
    <TextField type="password" fullWidth={true} margin="normal"  placeholder="Повторите ваш пароль" label="Password" variant="outlined" onChange={(e) => setRepeatPassword(e.target.value)}/>
    <Button type="submit" sx={{fontFamily: 'Poppins', mt: 2, mb: 2, width: '60%'}}  variant="contained">Регистрация</Button>
    <Typography variant="body1" sx={{fontFamily: 'Poppins'}} textAlign={'center'}>У вас есть аккаунт?<span className="incitingText"><Link to={'/login'}>Авторизация</Link></span></Typography>
  </>
  )
}

export default Register