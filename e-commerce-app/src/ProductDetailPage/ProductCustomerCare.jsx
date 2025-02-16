import ProductReview from "./ProductReview";
import ProductreviewHead from "./ProductReviewHead";


const ProductCustomerCare = () => {
    return ( <div className="lg:mx-24 mx-3">
        <div>
        <div>
            <ProductreviewHead/>
        </div>

        <div>
            <ProductReview/>
        </div>

        </div>
    </div> );
}
 
export default ProductCustomerCare;