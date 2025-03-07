import Card from "../CardComponent.jsx/Card";
import View from "../ButtonComponent/View";

const NewArrivals = () => {
    let fetchedData = [
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
     
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        
    ];
    return (
        <div className="lg:mx-24 border-b-2 border-[#F0F0F0] mx-3">
            <div>
                <div className="lg:text-5xl text-3xl font-bold my-10 grid justify-center">
                    NEW ARRIVALS
                </div>

                {fetchedData.length > 0 ?
                 (
                    <div className="flex m-3 w-full shadow-lg overflow-x-scroll lg:overflow-x-hidden lg:gap-5 gap-1  ">
                        {fetchedData.map((item, index) => (
                             <div  key={index} className="min-w-1/2 lg:min-w-auto p-3">
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

                <div className="grid lg:justify-center my-10">
                    <View view='View All' />
                </div>
            </div>
        </div>
    );
}

export default NewArrivals;