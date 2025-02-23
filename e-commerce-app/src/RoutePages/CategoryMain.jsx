
import { useEffect, useState } from "react";
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

         <div className=" relative flex  flex-col-reverse lg:flex-row gap-5 border-t-2 border-[#0000001A] lg:mx-24  lg:py-5">
         <div
          className={`order-1 h-full rounded-3xl transition-all duration-500 ease-in-out transform lg:relative absolute inset-x-0 bottom-0 lg:inset-auto bg-white z-30 ${
            isFilterOpen
              ? 'translate-y-0 opacity-100'
              : `hidden lg:block`
          }`}
        >
        
               <CategoryMainFilter toggleFilter={toggleFilter} />

              
            </div>
            <div className='order-2 mx-3 '>
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