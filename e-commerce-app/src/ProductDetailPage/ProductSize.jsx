import { useState } from "react"

const ProductSize = () => {

    let [Size , SetSize ] =useState()
    let SizeData =[
        {Size:'small'},
        {Size:'medium'},
        {Size:'large' },
        {Size:'Xlarge'},
    ]



    let funk=(x,index) => {
        console.log(x,index)
        SetSize(index)

    }












    return ( <div>


        <div className="py-5 grid gap-3 border-b-2 border-[#F0F0F0]">
            <div>
                <p>Select Size</p>
             
            </div>

            <div className="flex gap-5 ">
                
                {SizeData.map((item,index)=>(
                <div key={index} onClick={()=>funk(item.Size,index)} className={`${index  === Size ?'bg-[#767686]' : 'bg-[#F0F0F0]' } rounded-3xl border py-0.5 x-10} `  } >
                 <p className="px-4" >{item.Size}</p>
                </div>
                ))}


            </div>
        </div>






    </div> );
}
 
export default ProductSize;