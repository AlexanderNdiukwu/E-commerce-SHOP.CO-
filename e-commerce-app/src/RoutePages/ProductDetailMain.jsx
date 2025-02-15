import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";
import ProductCustomerCare from "../ProductDetailPage/ProductCustomerCare";
import ProductHeader from "../ProductDetailPage/ProductHeader";
import ProductMoreSelect from "../ProductDetailPage/ProductMoreDesign";
import ProductSelect from "../ProductDetailPage/ProductSelect";





const ProductDetailMain = () => {






    return ( <div>




  <div className="lg:flex gap-6 lg:mx-24 lg:py-10 border-t-2 border-[#F0F0F0]">
                <div >
                    <ProductHeader/>
              
                </div>
                  
                <div >
                   <ProductSelect/>
                </div>
</div>

<div >
    <ProductCustomerCare/>
</div>

<div>
    <ProductMoreSelect/>
</div>















    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>



        
        
    </div> );
}
 
export default ProductDetailMain;