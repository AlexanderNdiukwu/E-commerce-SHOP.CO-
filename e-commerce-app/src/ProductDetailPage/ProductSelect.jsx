import ProductCard from "../CardComponent.jsx/ProductCard";
import ProductQuatity from "./ProductQuatity";
import ProductSize from "./ProductSize";
import SelectColor from "./SelectColor";

const ProductSelect = ({ProductDetail}) => {


    // let ProductDetail ={title:'One Life Graphic T-Shirt', rating:'/images/CardImages/starRate.png', price:'$206', OriginalPrice:'$697', discount:'-20%', desc:'The graphic T-shirt which is perfect for any occassion. Crafted from a soft and Breathable fabric.it offers superiorcomfortable style.'}
    
    











    return ( <div className="grid items-center  h-full">

          
        <div className="border-b-2 border-[#F0F0F0]">
            <ProductCard title={ProductDetail.title} rating={ProductDetail.rating}  price={ProductDetail.price} OriginalPrice={ProductDetail.OriginalPrice} discount={ProductDetail.discount} desc={ProductDetail.desc} />
        </div>
      
        <div>
            <SelectColor  />
        </div>

        <div>
            <ProductSize/>

        </div>
        <div>
            <ProductQuatity/>
        
        </div>

 







    </div> );
}
 
export default ProductSelect;