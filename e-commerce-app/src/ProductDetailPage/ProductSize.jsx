import { useState } from "react"

const ProductSize = () => {

    let [Size , SetSize ] =useState()
    let SizeData =[
        {Size:'small'},
        {Size:'medium'},
        {Size:'large' },
        {Size:'Xlarge'},
    ]



    let funk=(index) => {
        console.log(index)
        SetSize(index)

    }












    return ( <div>


        <div className="py-5 grid gap-3 border-b-2 border-[#F0F0F0]">
            <div>
                <p>Select Size</p>
             
            </div>

            <div className="flex gap-5 ">
                
                {SizeData.map((item,index)=>(
                <div key={index} onClick={()=>funk(index)} className={`${index  === Size ?'bg-black' : 'bg-[#F0F0F0]' } rounded-3xl py-0.5 px-6} `  } >
                 <p>{item.Size}</p>
                </div>
                ))}


            </div>
        </div>






    </div> );
}
 
export default ProductSize;