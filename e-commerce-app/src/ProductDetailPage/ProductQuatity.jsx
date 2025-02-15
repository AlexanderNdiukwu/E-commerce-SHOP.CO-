import CartButton from "../ButtonComponent/CartButton";
import ProductAdd from "./ProductAdd";

const ProductQuatity = () => {
    return ( <div>
        <div className="grid grid-cols-[170px_1fr] gap-2 mt-4">
            <div>
            <ProductAdd/>

            </div>

            <div>
                <CartButton/>
            </div>

        </div>
    </div> );
}
 
export default ProductQuatity;