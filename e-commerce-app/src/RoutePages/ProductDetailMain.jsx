import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";
import ProductHeader from "../ProductDetailPage/ProductHeader";
import ProductSelect from "../ProductDetailPage/ProductSelect";





const ProductDetailMain = () => {





    
    return ( <div>




  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="order-2 lg:order-1">
                    <ProductHeader/>
              
                </div>
                  
                <div className="order-1 lg:order-2">
                   <ProductSelect/>
                </div>
            </div>












    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>



        
        
    </div> );
}
 
export default ProductDetailMain;