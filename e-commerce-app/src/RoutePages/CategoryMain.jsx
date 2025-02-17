
import { useState } from "react";
import CategoryClotheFilterMain from "../CategoryaPage/CategoryClotheFilterMain";
import CategoryMainFilter from "../CategoryaPage/CategoryMainFilter";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";

const CategoryMain = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleFilter = () => {


        setIsFilterOpen(!isFilterOpen);
       


    };

    
    return ( <div>

         <div className=" relative flex  flex-col-reverse lg:flex-row gap-5 border-t-2 border-[#0000001A] lg:mx-24 lg:py-5">
            <div  className={` order-1 h-full rounded-3xl transition-transform duration-700 ease-in-out absolute  lg:relative ${isFilterOpen ? ' bg-white inset- z-50  ' : 'hidden lg:block'}`}>

        
               <CategoryMainFilter toggleFilter={toggleFilter} />

              
            </div>
            <div className='order-2 '>
                <CategoryClotheFilterMain  toggleFilter={toggleFilter}/>
            </div>

{/*          
{isFilterOpen && (
    <div
      className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md z-40"
      onClick={toggleFilter}
    ></div>
  )}
    */}











         </div>
     















        
    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>


    </div> );
}
 
export default CategoryMain;