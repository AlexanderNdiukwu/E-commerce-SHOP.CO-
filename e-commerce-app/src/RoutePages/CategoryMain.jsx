
import { useState } from "react";
import {motion,AnimatePresence} from 'framer-motion'
import CategoryClotheFilterMain from "../CategoryaPage/CategoryClotheFilterMain";
import CategoryMainFilter from "../CategoryaPage/CategoryMainFilter";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";


let meunbar ={
  hidden:{
    opacity:0,y:'100vh'
  },
  visible:{
    opacity:1,y:0,
    transition:{duration:0.8 ,ease:'easeIn'}
  },

  exit:{
    y:1000,
    opacity:0,
    transition:{ease:'easeInOut',duration:0.5}
  }
}





const CategoryMain = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    // let [collectDat]
    let [clicked,SetClicked] = useState('')

  

    

    const toggleFilter = () => {

        setIsFilterOpen(!isFilterOpen);
    

    };






    
    return ( <div>

         <div className=" relative flex  flex-col-reverse lg:flex-row gap-5 border-t-2 border-[#0000001A] lg:mx-24  lg:py-5">

          <AnimatePresence>
           {isFilterOpen &&  
            <motion.div
                  variants={meunbar}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
            
              className={`order-1 h-full flex lg:hidden rounded-3xl transition-all duration-500 ease-in-out transform lg:relative absolute inset-x-0 bottom-0 lg:inset-auto bg-white z-30 
            `}
            >
                  <CategoryMainFilter toggleFilter={toggleFilter} />
    
              </motion.div>
                     }
            
              
         
            </AnimatePresence>
            <div
              
              className={`order-1 hidden lg:block h-full rounded-3xl transition-all duration-500 ease-in-out transform lg:relative absolute inset-x-0 bottom-0 lg:inset-auto bg-white z-30 
            `}
            >
                  <CategoryMainFilter toggleFilter={toggleFilter} />
    
                </div>


            <div className='order-2 mx-3 '>
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