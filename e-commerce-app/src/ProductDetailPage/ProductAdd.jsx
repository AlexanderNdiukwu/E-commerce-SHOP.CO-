import { useState } from "react"



const ProductAdd = () => {
    let [Quatity,SetQuality] = useState(0)

    let Add = () =>{
        SetQuality(c=>c+1)
        console.log (Quatity+1)
    }
    
    let Subtract = () =>{
        if ( Quatity > 0 ){

            SetQuality(c=>c-1)
        console.log (Quatity-1 )
        console.log (Quatity)


        }
    }




    return ( <div>

    <div className="flex gap-2.5 bg-[#F0F0F0] items-center justify-center rounded-4xl py-4 w-full ">


        <div>
            <p onClick={Subtract}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

            </p>
        </div>


    <div>


        <p>{Quatity}</p>


    </div>




        
        <div>
            <p onClick={Add}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            </p>
        </div>



    </div>





    </div> );
}
 
export default ProductAdd;