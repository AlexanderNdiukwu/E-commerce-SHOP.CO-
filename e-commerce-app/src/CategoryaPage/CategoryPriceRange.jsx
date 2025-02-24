import { useState } from "react";

const CategoryPriceRange = () => {
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(200);

    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice - 1);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice + 1);
        setMaxPrice(value);
    };

    return (
        <div>
            <div className="border-b-2 border-[#F0F0F0] py-10">
                <p className="text-xl font-bold">Price</p>
                <div className="flex items-center ">
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        className="w-full "
                    // />
                    // <input
                    //     type="range"
                    //     min="200"
                    //     max="1000"
                    //     value={maxPrice}
                    //     onChange={handleMaxPriceChange}
                    //     className="w-full"
                    // />
                </div>
                <div className="flex justify-between mt-2">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default CategoryPriceRange;