import { Route, Routes } from "react-router-dom"
import Home from "./components/home"
import PrivateRoute from "./utils/router/PrivateRoute"
import AuthRootComponent from "./components/auth"
import './index.css'
import { colorModeContext, useMode } from './theme/index.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from "react"
import LayoutComponent from "./components/layout/index.tsx"
import News from "./components/news/index.tsx"
import Logout from "./components/Logout/index.tsx"
import Settings from "./components/Settings/index.tsx"



const App = () => {
  const [theme, colorMode] = useState('')
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <LayoutComponent>
    <div>
    <Routes>
      <Route element={<PrivateRoute/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="login" element={<AuthRootComponent/>}/>
      <Route path="register" element={<AuthRootComponent/>}/>
    </Routes>
    </div>
    </LayoutComponent>
    </ThemeProvider>
    </colorModeContext.Provider>
  )
}

export default App