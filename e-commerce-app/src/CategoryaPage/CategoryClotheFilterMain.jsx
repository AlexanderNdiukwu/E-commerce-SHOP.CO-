import { useState } from "react";
import Card from "../CardComponent.jsx/Card";

const CategoryClotheFilterMain = ({ toggleFilter ,CategoryCall  }) => {
   
    let fetchedData = [
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 'jeans', rating: '/images/CardImages/starRate.png', price: "$20" },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
        // { imageFit: 'w-full', ProductImage: '/images/CardImages/image.png', desc: 't-shirt', rating: '/images/CardImages/starRate.png', price: "$20", OriginalPrice: 'ddd ', discount: 'e' },
    ];

    return (
        <div className=" h-full ">
            <div className="flex justify-between">
                <p className="text-3xl font-bold">causual</p>
                <p className="hidden lg:block">
                    this the number of the filter pages 
                </p>

                <div className="bg-[#F0F0F0] py-1 px-3 rounded-3xl grid lg:hidden">
                    <button onClick={toggleFilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>
                    </button>
                </div>
            </div>
            {fetchedData.length > 0 ? (
                <div className="grid shadow-lg lg:grid-cols-3 grid-cols-2 lg:gap-5 gap-1">
                    {fetchedData.map((item, index) => (
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
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 font-bold animate-bounce shadow-2xl">No clothe.</div>
            )}
        </div>
    );
}

export default CategoryClotheFilterMain;