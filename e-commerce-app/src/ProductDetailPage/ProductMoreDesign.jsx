import Card from "../CardComponent.jsx/Card";

const ProductMoreSelect = () => {
    let fetchedData = [
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
     
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        
    ];
    return (
        <div className="lg:mx-24 mx-3">
            <div>
                <div className="lg:text-5xl text-3xl font-bold my-10 grid justify-center">
                    <p className="font-bold">YOU MIGHT ALSO LIKE </p>
                </div>

                {fetchedData.length > 0 ? (
                    <div className="flex m-3 shadow-lg overflow-x-scroll lg:overflow-x-hidden lg:gap-5 gap-1  ">
                        {fetchedData.map((item, index) => (
                             <div  key={index} className="min-w-1/2 lg:min-w-auto">
                            <Card
                           
                            imageFit={item.imageFit}
                            ProductImage={item.ProductImage}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}
                            OriginalPrice={item.OriginalPrice}
                            discount={item.discount}
                            />
                           </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">No More</div>
                )}

             
            </div>
        </div>
    );
}
 
export default ProductMoreSelect;