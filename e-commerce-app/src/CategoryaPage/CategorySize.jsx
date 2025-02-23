import { useState } from "react"

const CategorySize = () => {
      let [Size , SetSize ] =useState()
        let SizeData =[
            {Size:'x-Small'},
            {Size:'small'},
            {Size:'medium'},
            {Size:'large' },
            {Size:'XXlarge'},
            {Size:'3xlarge'},
            {Size:'4xlarge'},
          
        ]
    
    
    
        let funk=(x,index) => {
            console.log(x,index)
            SetSize(index)
    
        }
    
    return ( <div>
        <div className="border-b-2 border-[#F0F0F0] py-6">
            <div className="py-4">
                <p className="text-xl font-bold">Size</p>
            </div>

           
            <div className="flex flex-wrap gap-5 ">
                
                {SizeData.map((item,index)=>(
                <div key={index} onClick={()=>funk(item.Size,index)} className={`${index  === Size ?'bg-black text-white text-base font-bold ' : 'bg-[#F0F0F0]' } rounded-3xl border py-0.5 x-10} `  } >
                 <p className="px-4" >{item.Size}</p>
                </div>
                ))}


            </div>
        </div>
    </div> );
}
 
export default CategorySize;