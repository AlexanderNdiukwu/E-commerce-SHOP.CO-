const CardOrderCard = () => {
    return ( <div className="">

        <div className="text-xl grid gap-6 py-6 border-b-2 border-[#0000001A]">

            <div className="flex justify-between">
                <p className="text-[#00000099]">Subtotal</p>
                <p>$564</p>
            </div>


            <div  className="flex justify-between  ">

                <div  className="flex text-[#00000099]">
                <p>Discount</p>
                <p>(-20%)</p>

                </div>

                <div>
                    <p>-133</p>
                </div>

            </div>


            <div  className="flex justify-between">
                <p  className="text-[#00000099]">Delivery Fee</p>
                <p>$15</p>
            </div>


        </div>

        <div className="grid gap-4 py-4">

        <div>
            <div  className="flex justify-between">
                <p className="text-xl font-normal" >Total</p>
                <p className="text-2xl font-bold">$1000</p>

            </div>
        </div>

        <div className="flex gap-4">
            <div className="flex relative">
                <div className="absolute top-3 left-4">
                    <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#00000066]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
</svg>
</p>
                </div>
                <div className="">
            <input type="text" placeholder="Add Promo Code "
            className="text-[#00000066] w-full px-18 py-3 outline-0 border-0 rounded-3xl bg-[#f0f0f0]" />

                </div>

            </div>
            <p className="bg-black text-center rounded-3xl text-white py-3 w-30">Apply</p>
        </div>

        <div className="flex gap-2 bg-black rounded-3xl text-white justify-center py-3 ">
            <button>Go to Checkout</button>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

            </p>
        </div>
        </div>









    </div>  );
}
 
export default CardOrderCard;