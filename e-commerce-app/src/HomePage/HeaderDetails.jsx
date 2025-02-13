const HeaderDetails = () => {


    let Details = [
        {num:'200+',desc:'International Brands'},
        {num:'2000+',desc:'High-Quality Products'},
        {num:'30,000+',desc:'Happy Customer'},
    ]









    return (  

        <div className="grid lg:grid-cols-2 h-[70vh] lg:mx-24   ">



            <div className="grid items-center my-10">
                <div className=" text-4xl lg:text-6xl font-bold">
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </div>

                <div className="text-base font-normal">
                    Browse through our diverse range of meticulously crafted garments,designed to bring out your individuality and carter to your sense of style 
                </div>

                <div className="text-base font-medium p-2.5 bg-black text-white w-52 text-center rounded-4xl">
                    shop Now 
                </div>

                <div className="grid grid-cols-3">

                    {Details.map((item,index)=>
                    <div key={index}>
                        <p >{item.num}</p>
                        <p >{item.desc}</p>

                    </div>)}


                </div>



            </div>






<div className="  h-full">

    <div className="relative overflow-hidden w-full  h-full">
        <img src="/images/FooterImages/bigBing.png" alt="bigBing" className=" absolute z-30 left-96 top-3"/>
        <img src="/images/FooterImages/smallBing.png" alt="smallBing"  className=" absolute z-30 top-96" />
        <img src="/images/MainHeadPhoto.png" alt="headMain" className="object-fit  h-full lg:relative right-48 bottom-4 " />
    </div>

</div>
            
        </div>

    );
}
 
export default HeaderDetails;