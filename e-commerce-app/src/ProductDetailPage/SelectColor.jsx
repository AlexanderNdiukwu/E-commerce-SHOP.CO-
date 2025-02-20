import { useState } from "react";

const SelectColor = () => { 

    let [Color,SetColor] = useState('')

    let SelectedColor =[
        {color:"amber"},
        {color:"green"},
        {color:'red'},
        {color:'pink'}
    ]

    let funk=(x,index) =>{
        console.log(x,index)
        

    }





    
    return ( <div>


        <div className="py-5 grid gap-3 border-b-2 border-[#F0F0F0]">
            <div>
                <p>Select Colors</p>
            </div>

            <div className="flex gap-5">
                {SelectedColor.map((item,index)=>(
                    <div onClick={()=>funk(item.color,index)} key={index} className={` rounded-4xl w-9 h-9 text-center bg-${item.color}-200`}>
                        
                       

                    </div>
                ))}
              

            </div>
        </div>


        
    </div> );
}
 
export default SelectColor;