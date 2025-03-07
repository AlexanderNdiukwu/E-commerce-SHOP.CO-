import ProductAdd from "../ProductDetailPage/ProductAdd";

const CartCard = ({CartImage,CartTitle,Size,Color,ProductPrice}) => {
    return ( <div>

        <div className=" ">
            <div className="grid grid-cols-3 lg:gap-4 lg:mx-10 mx-4 py-7  border-b-2 border-[#f0f0f0]">


            <div>
                <div >
                <img src={CartImage} alt="image" className="rounded-2xl w-full" />

                </div>
                
            </div>



            
            <div className="grid items-evenly py-2.5">
                <div className="grid gap-1"  >
                    <div className="font-bold text-xl lg:text-2xl w-full overflow-hidden">
                    <p>{CartTitle}</p>

                    </div>


                <div className="grid gap-0.5 font-normal">
                <div className="flex gap-1.5">
                    <p >Size:</p>
                    <p className="text-[#00000099]">{Size}</p>
                </div>
                <div className="flex gap-1.5">
                    <p>Color:</p>
                    <p className="text-[#00000099]">{Color}</p>
                </div>

                </div>

                </div>

                <div className="font-bold lg:text-2xl text-xl  flex items-end">
                    <p>{ProductPrice}</p>
                </div>
            </div>
            <div className="grid  content-between">
                <div className="flex justify-end ">

               <p>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-[#FF3333]">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

               </p>
                </div>

                <div className=" ">

                    <ProductAdd/>

                </div>
            </div>

            
            </div>











        </div>




















    </div> );
}
 
export default CartCard;