const ProductCard = ({title,rating,price,OriginalPrice,discount,desc}) => {
    return ( <div>



        
<div className="w-full border-b ">
        
          
            <div>
                <p className="font-bold text-4xl">{title}</p>
            </div>


            <div className="grid justify-start w-full">
                <img src={rating} alt="" className="object-fit w-fit" />
            </div>

            <div className="flex gap-1.5 ">
                <div>{price}</div>
                <div>{OriginalPrice}</div>
                <div>{discount}</div>
            </div>
            <div className="grid justify-start w-full overflow-hidden">
                <p>{desc} </p>
            </div>
          
        </div>


    </div> );
}
 
export default ProductCard;