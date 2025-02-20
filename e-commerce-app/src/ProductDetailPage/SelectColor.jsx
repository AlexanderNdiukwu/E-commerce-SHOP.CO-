import { useState } from "react";

const SelectColor = () => { 

    let [Color,SetColor] = useState('')

    let SelectedColor =[
        {color:"#f0f0f0"},
        {color:"#FF0000"},
        {color:'#080000'},
        {color:'#FFC0CB'}
    ]

    let funk=(x,index) => {
        console.log(x,index)
        SetColor(x)

    }





    
    return ( <div>


        <div className="py-5 grid gap-3 border-b-2 border-[#f0f0f0] ">
            <div>
                <p>Select Colors</p>
            </div>

            <div className="flex gap-5">
                {SelectedColor.map((item,index)=>(
                  
                    <div onClick={()=>funk(item.color,index)} key={index}  className={`border grid items-center  rounded-4xl w-9 h-9 text-center cursor-pointer `}  style={{ backgroundColor: item.color }}>    
                        {Color === item.color && <span className="text-white">✓</span>   }
                    </div>
                ))}
            </div>
        </div>       
    </div> );
}
 
export default SelectColor;