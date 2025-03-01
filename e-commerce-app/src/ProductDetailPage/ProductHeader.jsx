const ProductHeader = ({CategoryProductMain}) => {

    let ProductMoreList = [
        {ProductMore:"/images/FooterImages/Bclothe.png"},
        {ProductMore:"/images/FooterImages/Bclothe.png"},
        {ProductMore:"/images/FooterImages/Bclothe.png"},
 
    ]
 








    return (
        <div className="flex flex-col-reverse lg:flex-row lg:gap-3">
            <div className="flex flex-row lg:flex-col gap-6  lg:my-0 my-2 lg:order-1">

                    {ProductMoreList.map((item,index)=>(
                <div key={index} className="rounded-2xl overflow-hidden">
                        <img  src={item.ProductMore} alt="clothe" className="w-45 lg:w-40 " />
                </div>

                    ))}

           
            </div>

            <div className="flex justify-center rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:ml-4 lg:order-2">
                <img src={CategoryProductMain} alt="clothe" className="object-cover h-full w-full lg:w-auto" />
            </div>
        </div>
    );
}

export default ProductHeader;