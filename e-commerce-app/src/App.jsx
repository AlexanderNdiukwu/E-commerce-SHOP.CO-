import AdvertPage from "./AdvertHeaderPage/AdvertHeader";
import { NavLink ,Outlet } from "react-router-dom";
import Navbar from "./NavBar/Navbar";







function App() {


 

  return (
<div className="select-none">
  <AdvertPage/>
   <Navbar/>
   {/* this is the place for the routing  */}
   



  <Outlet/>


 

</div>
  )
}

export default App
