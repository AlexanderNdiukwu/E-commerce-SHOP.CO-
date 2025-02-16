import Card from "../CardComponent.jsx/Card";


const CategoryClotheFilterMain = () => {
    let fetchedData = [
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
     
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
      
    ];






    return ( <div>

        <div>
            <p className="text-3xl font-bold">Casual</p>
        </div>
        {fetchedData.length > 0 ? (
                    <div className="grid shadow-lg lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-1  ">
                        {fetchedData.map((item, index) => (
                             <div  key={index} className="w-auto">
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
                    <div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">No new arrivals at the moment.</div>
                )}


    </div> );
}
 
export default CategoryClotheFilterMain;