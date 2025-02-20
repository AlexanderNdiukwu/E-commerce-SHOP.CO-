const ProductSize = () => {
    return ( <div>


        <div className="py-5 grid gap-3 border-b-2 border-[#F0F0F0]">
            <div>
                <p>Select Size</p>
             
            </div>

            <div className="flex gap-5 ">
                <div className="bg-[#F0F0F0] rounded-3xl py-0.5 px-3">
                 <p>Small</p>
                </div>
                <div className="bg-[#F0F0F0] rounded-3xl py-0.5 px-3">
                <p>Medium</p>
                </div>
                <div className="bg-[#F0F0F0] rounded-3xl py-0.5 px-3">
                 <p>Large</p>
                </div>
                <div className="bg-[#F0F0F0] rounded-3xl py-0.5 px-3">
                    <p>X-Large</p>
                </div>

            </div>
        </div>






    </div> );
}
 
export default ProductSize;