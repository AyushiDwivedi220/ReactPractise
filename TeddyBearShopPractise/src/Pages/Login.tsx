import { useState } from "react";
import { NavLink } from "react-router-dom";
const handleLogin = (event:any) =>{
    event.preventDefault()
    console.log("logged in")
}



export type loginFormData = {
    username: string
    password: string 
}

const Login = () => {

    const [form,setForm] = useState<loginFormData>(
        {
            username:"",
            password:""
        }
    )

    const handleChange = (event:any) => {
    const {name,value} = event.target;

    setForm((previousForm) => ({
        ...previousForm,
        [name]: value,
    }));
}
    
    return (
    <div className="login-page">
        <h1>Welcome Back! 🧸</h1>
        <p>Sign in to your TeddyShop account.</p>

        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" name= "username" onChange = {handleChange} />
            <input type="text" placeholder="Password" name = "password" onChange = {handleChange}/>
            <button type = "submit">Login</button>
        </form>
        
        <p> Haven't Signed up?</p>
        <NavLink to="/signup">Sign Up</NavLink>
    </div>
    )
}

export default Login;