import { useState } from "react";
import ProductReview from "./ProductReview";
import ProductreviewHead from "./ProductReviewHead";


const ProductCustomerCare = () => {
    let [isFAQClicked , SetisFAQClicked ] = useState(false)
    let [isReviewClicked , SetisReviewClicked ] = useState(true)
    let [isProductClicked , SetisProductClicked ] = useState(false)




    let handle = (x) =>{



        if (x == 'Rating & Reviews'){

            if ((isFAQClicked ) || (isProductClicked ) ){
                
                SetisFAQClicked(false)
                SetisProductClicked(false)
            }

            SetisReviewClicked(true)

        }
        if (x == 'Product Details'){

            if ((isFAQClicked ) || (isReviewClicked ) ){
                
                SetisFAQClicked(false)
                SetisReviewClicked(false)
            }

            SetisProductClicked(true)
            console.log ('you are clicking the product ')

        }
        if (x == 'FAQs'){

            
            if ((isProductClicked ) || (isReviewClicked ) ){
                
                SetisProductClicked(false)
                SetisReviewClicked(false)
            }
            SetisFAQClicked(true)


   
        console.log ('you are clicking the fqs')

        }
        
  
    }











    return ( <div className="lg:mx-24 mx-3">
        <div>
        <div>
            <ProductreviewHead handleVisiblity={handle}/>
        </div>

        <div>

            {isReviewClicked   && 
            <ProductReview/>
            }

            {isFAQClicked   && 
           <div>this is the faqs </div>
            }

            {isProductClicked   && 
           <div>this is the product list  </div>
            }
        </div>

        </div>
    </div> );
}
 
export default ProductCustomerCare;