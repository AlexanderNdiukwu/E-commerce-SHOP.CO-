const Card = ({Category,ProductImage,desc,rating,price,OriginalPrice,discount,imageFit}) => {
    return ( <div>




        <div className="w-full ">
            <div className="rounded-2xl overflow-hidden relative ">

                <p className="absolute left-10 top-6 text-4xl font-bold">{Category}</p>
                <img src={ProductImage} alt="product" className={`${imageFit}`} />
            </div>

            <div className="grid items-center px-0.5 py-1">


            <div className="grid justify-start w-full overflow-hidden">
                <p>{desc} </p>
            </div>

            <div className="grid justify-start w-full">
                <img src={rating} alt="" className="object-fit w-fit" />
            </div>

            <div className="flex gap-1.5 ">
                <div>{price}</div>
                <div>{OriginalPrice}</div>
                <div className="bg-[#FF33331A] text-[#FF3333] border-0 text-center text-sm py-0.5 px-2 rounded-2xl ">{discount}</div>

            </div>
            </div>
        </div>







    </div> );
}
 
export default Card;