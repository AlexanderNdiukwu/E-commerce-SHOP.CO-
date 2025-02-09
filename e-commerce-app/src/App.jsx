import AdvertPage from "./AdvertHeaderPage/AdvertHeader";
import { NavLink ,Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";







function App() {


 

  return (
<div>
  <AdvertPage/>
  <Navbar/>



  <Outlet/>


 

</div>
  )
}

export default App
