import { NavLink } from "react-router-dom";
import { UserRound, ShoppingCart } from "lucide-react";
import "../App.css"

const NavBarItems = [
    {path: "/" , name: "Home"},
    {path: "/shop", name: "Shop"},
    {path:"/about", name:"About"},
    {path:"/login", name:"Login"}
    
];

const NavBarIcons = [
  { path: "/profile", "aria-label": "Profile", title: "Profile",icon:UserRound },
  { path: "/cart", "aria-label": "Shopping cart", title: "shopping-cart" , icon:ShoppingCart},
];


const NavBar = () => (
    <nav className = "navbar">
        <NavLink to="/" className="navbar-logo"> 🧸 <span>TeddyShop</span> </NavLink>
        
        <div className="items">
        {
            NavBarItems.map((item) =>  (
                <NavLink  className = "nav-items" key= {item.name} to={item.path}> {item.name} </NavLink>
            ))
        }
        </div>

        <div className="icons">
        {
            NavBarIcons.map((item) =>{
                const Icon = item.icon;
                return (
                    <NavLink className = "nav-icons" key = {item.title} to = {item.path} aria-label={item["aria-label"]}>
                        <Icon size={22} />
                    </NavLink>
                )
            })
        }
        </div>
    </nav>
)

export default NavBar;