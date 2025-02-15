const ProductReviewNav = () => {
    return ( <div>
        <div className="grid grid-cols-2 py-4 ">
            <div className="flex items-center ">
                <p className="font-bold text-2xl">All Reviews</p>
                <p className="text-[#00000099]">(24)</p>
            </div>
            <div className="flex justify-end gap-3 ">

                <div className="bg-[#F0F0F0] py-1 px-3 rounded-3xl" >
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>

                    </p>
                </div>

                <div className="bg-[#F0F0F0] py-1 px-3 rounded-3xl">
                    <p>Latest</p>
                </div>

                <div className="bg-black text-white rounded-3xl  py-1 px-3">
                    <p>Write A Review </p>
                </div>

            </div>
        </div>
    </div> );
}
 
export default ProductReviewNav;