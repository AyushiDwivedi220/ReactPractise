
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home.tsx"
import Login from "./Pages/Login.tsx"
import Signup from './Pages/Signup.tsx'
import Shop from "./Pages/Shop.tsx"
import About from "./Pages/About.tsx"

const AppRoutes = () => (
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login"  element = {<Login/>}/>
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/shop" element = {<Shop/>}/>
        <Route path = "/about" element = {<About/>}/>
    </Routes>
)

export default AppRoutes;