const BrandBanner = () => {











    return ( <div className="lg:mx-24">

<div className="grid grid-cols-5 gap-6   justify-center items-center ">
    <div className="col-span-2 lg:col-span-1 pl-6">
        <img src="/images/BrandBanner/versace.png" alt="versace" className="object-fit " />
    </div>
    <div className="grid justify-center ">
    <img src="/images/BrandBanner/zara.png" alt="zara" className="scale-75 "  />

    </div>
    <div className="col-span-2 lg:col-span-1">
    <img src="/images/BrandBanner/gucci.png" alt="gucci" />


    </div>
<div className="grid items-center col-start-2 lg:col-start-1 border border-white  w-96 ">
      <div className="grid grid-cols-2  col-span-2 ">

      
    <div className="grid justify-center" >
    <img src="/images/BrandBanner/prada.png" alt="prada"/>

    </div>
    <div className="grid justify-center">
    <img src="/images/BrandBanner/calvin.png" alt="calvin" />
    </div>
    </div>
</div>

</div>




    </div> );
}
 
export default BrandBanner;