import NavBar from './Components/NavBar.tsx'

import {BrowserRouter} from "react-router-dom"
import './App.css'
import AppRoutes from './AppRoutes.tsx';


const App = () => (
  <BrowserRouter>
       <NavBar/>
       <AppRoutes/>
  </BrowserRouter>
  
);

export default App;