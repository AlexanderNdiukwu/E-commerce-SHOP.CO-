import { useState } from "react";

const CategoryColorSelect = () => {

    
        let [Color,SetColor] = useState('')
    
        let SelectedColor =[
            {color:"red"},
            {color:"pink"},
            {color:'white'},
            {color:'black'},
            {color:'grey'},
            {color:'purple'},
            {color:'yellow'},
            {color:'green'},
            {color:'blue'}
        ]
    
        let funk=(x,index) => {
            console.log(x,index)
            SetColor(x)
    
        }
    
    
    return ( <div>
        <div>

        <div className="py-5 grid gap-3 border-b-2 border-[#F0F0F0]">
            <div>
                <p className="text-xl font-bold">Colors</p>
            </div>

            <div className="flex flex-wrap gap-5">
                {SelectedColor.map((item,index)=>(
                  
                    <div onClick={()=>funk(item.color,index)} key={index}  className={`border border-black grid items-center  rounded-4xl w-9 h-9 text-center cursor-pointer `}  style={{ backgroundColor: item.color }}>    
                        {Color === item.color && <span className="text-white">✓</span>   }
                    </div>
                ))}
            </div>
        </div>

        </div>
    </div> );
}
 
export default CategoryColorSelect;