import { useState } from "react";

const ProductreviewHead = ({handleVisiblity}) => {
    let [clicked ,setClicked ] = useState()

    let lists = [
        {items: 'Product Details'},
        {items : 'Rating & Reviews'},
        {items : 'FAQs'},
    ]


  let u = (x)=> {
    setClicked(x)
    handleVisiblity(x)

  }




    return ( <div>
        <div className=" pt-8 lg:text-xl text-base grid grid-cols-3 font-normal  text-center">

            {
                lists.map((list,index ) => (
                    <div onClick={()=>u(list.items)} key={index} className={`border-b-2 text-[#00000099] border-[#F0F0F0] py-3 lg:py-3 ${clicked == list.items ? 'border-b-2 text-[#000000] border-black':''}`}>
                    <p  className="whitespace-nowrap">{list.items}</p>
                    </div>
                ))
            }


          
        </div>
    </div> );
}
 
export default ProductreviewHead;