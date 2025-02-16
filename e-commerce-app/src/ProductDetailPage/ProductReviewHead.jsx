const ProductreviewHead = () => {
    return ( <div>
        <div className=" pt-8 lg:text-xl text-base grid grid-cols-3 font-normal  text-center">
            <div className="border-b-2 text-[#00000099] border-[#F0F0F0] py-3 lg:py-3">
                <p className="whitespace-nowrap">Product Details</p>
            </div>
            <div className="border-b-2 text-[#000000] border-[#000000] py-3  lg:py-3">
                <p className="whitespace-nowrap">Rating & Reviews</p>
            </div>
            <div className="border-b-2 text-[#00000099] border-[#F0F0F0] py-3  lg:py-3">
                <p className="whitespace-nowrap">FAQs</p>
            </div>
        </div>
    </div> );
}
 
export default ProductreviewHead;