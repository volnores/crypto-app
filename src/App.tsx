import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import PrivateRoute from "./utils/router/PrivateRoute"
import AuthRootComponent from "./components/auth"
import './index.css'



const App = () => {
  return (
    <div>
    <Routes>
      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<AuthRootComponent/>}/>
      <Route path="register" element={<AuthRootComponent/>}/>
    </Routes>
    </div>
  )
}

export default App