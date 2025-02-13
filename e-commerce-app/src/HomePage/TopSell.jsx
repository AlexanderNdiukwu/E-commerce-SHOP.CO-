import Card from "../CardComponent.jsx/Card";
import View from "../ViewButton/View";

const TopSell = () => {
    let fetchedData = [
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        
    ];






    return ( 
        <div className="lg:mx-24">
            <div>
                <div className="text-5xl font-bold my-10 grid justify-center">
                    TOP SELL 
                </div>

                {fetchedData.length  > 0 ? 

                <div className="grid grid-cols-4 gap-5">

                    {fetchedData.map((item , index )=> 

                        <Card 
                        key={index}
                        imageFit={item.imageFit}
                        ProductImage={item.ProductImage}
                        desc={item.desc}
                        rating={item.rating}
                        price={item.price}
                        OriginalPrice={item.OriginalPrice}
                        discount={item.discount}
                        />
                    


                    )}

                </div>

                :
                                 <div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">No new arrivals at the moment.</div>





                }

                <div className="grid justify-center my-10">
                    <View/>
                </div>
            </div>
        </div>
     );
}
 
export default TopSell;