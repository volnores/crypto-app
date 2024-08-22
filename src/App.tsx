import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import Login from "./components/auth/login"
import PrivateRoute from "./utils/router/PrivateRoute"



const App = () => {
  return (
    <div>
    <Routes>
      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Home/>}/>
      </Route>
      <Route path="login" element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App