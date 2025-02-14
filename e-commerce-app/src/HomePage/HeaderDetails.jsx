const HeaderDetails = () => {


    let Details = [
        {num:'200+',desc:'International Brands'},
        {num:'2000+',desc:'High-Quality Products'},
        {num:'30,000+',desc:'Happy Customer'},
    ]









    return (  

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:h-[70vh]  lg:mx-24 overflow-hidden  ">



            <div className="grid items-center  lg:my-10">
                <div className="pr-14 lg:pr-0 pt-7 lg:pt-0 text-4xl lg:text-6xl font-bold">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>

                <div className="text-base font-normal p-2">
                    Browse through our diverse range of meticulously crafted garments,designed to bring out your individuality and carter to your sense of style 
                </div>

                <div className="text-base font-medium p-1 lg:p-2.5 mx-2 lg:mx-0 bg-black text-white lg:w-52 text-center rounded-4xl">
                    shop Now 
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-2 ">

                    {Details.map((item,index)=>
                    <div key={index} className={`grid justify-center my-2 lg:col-span-1  ${index===2?'col-span-2':''}`}>
                        <p className="lg:text-4xl text-2xl font-bold " >{item.num}</p>
                        <p className="whitespace-nowrap lg:text-base text-sm" >{item.desc}</p>

                    </div>)}


                </div>



            </div>






<div className="  h-full">

    <div className="relative overflow-hidden w-full  h-full">
        <img src="/images/FooterImages/bigBing.png" alt="bigBing" className="w-12 right-0 absolute z-30 lg:top-3"/>
        <img src="/images/FooterImages/smallBing.png" alt="smallBing"  className=" w-9  ml-6 bottom-28 absolute z-30 lg:bottom-0" />
         <img src="/images/MainHeadPhoto.png" alt="headMain" className=" grid overflow-hidden relative h-96 lg:h-full lg:right-17 scale-248 lg:scale-100 object-contain object-right right-58 top-2 lg:object-cover   lg:object-right"/>
    </div>

</div>
            
        </div>

    );
}
 
export default HeaderDetails;