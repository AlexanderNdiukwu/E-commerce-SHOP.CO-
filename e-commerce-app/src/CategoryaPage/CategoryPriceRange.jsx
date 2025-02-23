import { useState } from "react";
import { useRef } from "react";

const CategoryPriceRange = () => {
    let [get , Setget] =useState('')
    return ( <div>
        <div>
            <div className="border-b-2 border-[#F0F0F0] py-10">
                <p className="text-xl font-bold">Price</p>

            <div>
                <input type="range" name='yhujn' id="" onChange={(e)=>Setget(e.target.value)} className="w-full " />
                <p>{get}</p>
      
            </div>
            </div>
        </div>
    </div> );
}
 
export default CategoryPriceRange;