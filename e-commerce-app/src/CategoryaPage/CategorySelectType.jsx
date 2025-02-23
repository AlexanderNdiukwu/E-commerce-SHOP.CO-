import { useState } from "react"

const CategorySelectType = () => {
    let [clicked,SetClicked] = useState('')
    
    let styleData = [
        {style:'T-shirt'},
        {style:'Shorts'},
        {style:'Hoodies'},
        {style:'Skirts'},
        {style:'Jeans'},
    ]


    




let click = (x)=>{

    console.log(x)
    SetClicked(x)


}

    return ( <div>
        <div className=" py-3 text-base border-b-2 border-[#0000001A] text-[#00000099] h-full grid gap-6">
        {styleData.map((item,index)=>(
            <div key={index} onClick={()=>click(item.style)} className={` hover:bg-[#f0f0f0] ${item.style === clicked ? 'bg-black text-white rounded-3xl px-2 py-1 font-bold': ''} `}>
                {item.style}

            </div>

           ))}
        </div>
    </div> );
}
 
export default CategorySelectType;