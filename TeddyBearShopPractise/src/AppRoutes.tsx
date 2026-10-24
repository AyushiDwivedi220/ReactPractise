
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home.tsx"
import Login from "./Pages/Login.tsx"

const AppRoutes = () => (
    <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login"  element = {<Login/>}/>
    </Routes>
)

export default AppRoutes;