import Card from "../CardComponent.jsx/Card";
import View from "../ButtonComponent/View";

const TopSell = () => {
    let fetchedData = [
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: '-40' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        
    ];






    return ( 
        <div className="lg:mx-24 mx-3">
            <div>
                <div className=" text-3xl lg:text-5xl font-bold my-10 grid justify-center">
                    TOP SELL 
                </div>

                {fetchedData.length  > 0 ? 

                <div className="grid m-3 shadow-lg grid-cols-4 lg:gap-5 gap-1">

                    {fetchedData.map((item , index )=> 
                         <div key={index} className="w-auto">
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
                    


                    )}

                </div>

                :
                      <div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">NO BEST TOP SELL YET .</div>





                }

                <div className="grid lg:justify-center my-10">
                    <View view='View All'/>
                </div>
            </div>
        </div>
     );
}
 
export default TopSell;