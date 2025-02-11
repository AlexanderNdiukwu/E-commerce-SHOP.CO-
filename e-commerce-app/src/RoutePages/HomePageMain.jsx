import React from "react";
import HeaderDetails from "../HomePage/HeaderDetails";
import BrandBanner from "../HomePage/BrandBanner";
import NewArrivals from "../HomePage/NewArrivals";
import TopSell from "../HomePage/TopSell";
import BrowseDesigns from "../BrowseDesigns/BrowseDesigns";


function HomePageMain() {
  return (

    <div className=" "> 

   

    
    
    
    <div className="bg-[#F2F0F1]  ">
      <HeaderDetails />
    </div>
    <div className="bg-black py-10">
      <BrandBanner />

    </div>

    <NewArrivals />
    <TopSell />

    <BrowseDesigns />





    


    
 
    </div>
  
  );
};

export default HomePageMain;
