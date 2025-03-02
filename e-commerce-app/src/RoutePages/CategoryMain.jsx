
import { useState } from "react";
import {motion,AnimatePresence} from 'framer-motion'
import CategoryClotheFilterMain from "../CategoryaPage/CategoryClotheFilterMain";
import CategoryMainFilter from "../CategoryaPage/CategoryMainFilter";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";


let meunbar ={
  hidden:{
    opacity:0,y:1000
  },
  visible:{
    opacity:1,y:0,
    transition:{duration:0.5 ,ease:'easeIn'}
  },

  exit:{
    y:1000
  }
}





const CategoryMain = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
  

    

    const toggleFilter = () => {

        setIsFilterOpen(!isFilterOpen);

    };






    
    return ( <div>

         <div className=" relative flex  flex-col-reverse lg:flex-row gap-5 border-t-2 border-[#0000001A] lg:mx-24  lg:py-5">

          <AnimatePresence>
            { isFilterOpen && 
            
            <motion.div
            variants={meunbar}
            initial='hidden'
            animate='visible'
      
            exit='exit'
              className={`order-1 h-full rounded-3xl transition-all duration-500 ease-in-out transform lg:relative absolute inset-x-0 bottom-0 lg:inset-auto bg-white z-30 
              `}
            >
                  <CategoryMainFilter toggleFilter={toggleFilter} />
    
                </motion.div>
                        
            }
            </AnimatePresence>


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