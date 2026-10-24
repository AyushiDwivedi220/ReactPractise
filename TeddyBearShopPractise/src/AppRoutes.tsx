
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home.tsx"
import Login from "./Pages/Login.tsx"
import Signup from './Pages/Signup.tsx'

const AppRoutes = () => (
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login"  element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
    </Routes>
)

export default AppRoutes;