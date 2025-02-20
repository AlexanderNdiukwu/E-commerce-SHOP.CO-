import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";
import ProductCustomerCare from "../ProductDetailPage/ProductCustomerCare";
import ProductHeader from "../ProductDetailPage/ProductHeader";
import ProductMoreSelect from "../ProductDetailPage/ProductMoreDesign";
import ProductSelect from "../ProductDetailPage/ProductSelect";





const ProductDetailMain = () => {
    let CategoryProduct ="/images/FooterImages/Bclothe.png"
    let ProductDetail ={title:'One Life Graphic T-Shirt', rating:'/images/CardImages/starRate.png', price:'$206', OriginalPrice:'$697', discount:'-20%', desc:'The graphic T-shirt which is perfect for any occassion. Crafted from a soft and Breathable fabric.it offers superiorcomfortable style.'}



   




















    return ( <div>

  <div className="lg:flex gap-6 mx-3 lg:mx-24 lg:py-10 border-t-2 border-[#F0F0F0]">
                  
                <div >

                        <ProductHeader CategoryProductMain={CategoryProduct} />


                </div>
                  

              
                
                <div  >
                   <ProductSelect ProductDetail={ProductDetail}/>
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