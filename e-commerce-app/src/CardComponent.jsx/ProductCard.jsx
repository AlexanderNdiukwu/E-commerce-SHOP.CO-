const ProductCard = ({title,rating,price,OriginalPrice,discount,desc}) => {
    return ( <div>



        
<div className="w-full  grid gap-3 ">
        
          
            <div className=" overflow-hidden ">
                <p className="font-bold lg:text-4xl text-2xl truncate ">{title}</p>
            </div>


            <div className="grid justify-start w-full">
                <img src={rating} alt="" className="object-fit w-fit" />
            </div>

            <div className="flex gap-2 items-center content-center  ">
                <div className="font-bold text-3xl">{price}</div>
                <div  className="font-bold text-3xl text-[#00000099] line-through">{OriginalPrice}</div>
                <div className="bg-[#FF33331A] text-[#FF3333] border-0 text-center text-sm  px-2 rounded-2xl ">{discount}</div>
            </div>
            <div className="grid justify-start w-full overflow-hidden pb-6">
                <p className="text-sm text-[#00000099]">{desc} </p>
            </div>
          
        </div>


    </div> );
}
 
export default ProductCard;