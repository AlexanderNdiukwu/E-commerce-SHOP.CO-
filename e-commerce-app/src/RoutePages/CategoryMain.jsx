
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
            <div  className={`order-1  z-50 h-full   transition-transform duration-900 ease-in-out  lg:relative ${isFilterOpen ? 'absolute bg-white inset- z-50  translate-y-0' : 'translate-y-full'}`}>

        
               <CategoryMainFilter toggleFilter={toggleFilter} />

              
            </div>
            <div className='order-2 hidden'>
                <CategoryClotheFilterMain  toggleFilter={toggleFilter}/>
            </div>















         </div>
     















        
    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>


    </div> );
}
 
export default CategoryMain;