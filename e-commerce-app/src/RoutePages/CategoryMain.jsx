
import CategoryClotheFilterMain from "../CategoryaPage/CategoryClotheFilterMain";
import CategoryMainFilter from "../CategoryaPage/CategoryMainFilter";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";

const CategoryMain = () => {
    
    return ( <div>

         <div className=" relative flex  flex-col-reverse lg:flex-row gap-5 border-t-2 border-[#0000001A] lg:mx-24 py-5">
            <div className="order-1 relative z-50 h-full  bg-white  ">
        
               <CategoryMainFilter/>

              
            </div>
            <div className="order-2 ">
                <CategoryClotheFilterMain/>
            </div>















         </div>
     















        
    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>


    </div> );
}
 
export default CategoryMain;