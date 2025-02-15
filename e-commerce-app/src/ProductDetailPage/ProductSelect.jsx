import ProductCard from "../CardComponent.jsx/ProductCard";
import ProductAdd from "./ProductAdd";
import ProductSize from "./ProductSize";
import SelectColor from "./SelectColor";

const ProductSelect = () => {
    return ( <div>


        <div className="border-b-2 border-[#F0F0F0]">
            <ProductCard title='One Life Graphic T-Shirt ' rating='/images/CardImages/starRate.png' price='$206' OriginalPrice='$697' discount='-20%' desc='The graphic T-shirt which is perfect for any occassion. Crafted from a soft and Breathable fabric.it offers superiorcomfortable style.'/>
        </div>
        <div>
            <SelectColor/>
        </div>

        <div>
            <ProductSize/>

        </div>
        <div>
            <ProductAdd/>
        </div>

 







    </div> );
}
 
export default ProductSelect;