import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";
import ProductCustomerCare from "../ProductDetailPage/ProductCustomerCare";
import ProductHeader from "../ProductDetailPage/ProductHeader";
import ProductSelect from "../ProductDetailPage/ProductSelect";





const ProductDetailMain = () => {






    return ( <div>




  <div className="flex gap-6 lg:mx-24 lg:py-10 border-t-2 border-[#F0F0F0]">
                <div className="order-2 lg:order-1">
                    <ProductHeader/>
              
                </div>
                  
                <div className="order-1 lg:order-2">
                   <ProductSelect/>
                </div>
</div>

<div>
    <ProductCustomerCare/>
</div>















    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>



        
        
    </div> );
}
 
export default ProductDetailMain;