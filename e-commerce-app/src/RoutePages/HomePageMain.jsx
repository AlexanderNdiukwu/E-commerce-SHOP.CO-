import React from "react";
import HeaderDetails from "../HomePage/HeaderDetails";
import BrandBanner from "../HomePage/BrandBanner";
import NewArrivals from "../HomePage/NewArrivals";
import TopSell from "../HomePage/TopSell";
import BrowseDesigns from "../BrowseDesigns/BrowseDesigns";
import Reviews from "../Reviews/Reviews";
import MainFooter from "../Footer/MainFooter";
import MainForm from "../EmailForm/MainForm";


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

    <Reviews/>
    
    <div className="bg-[#F0F0F0]">
     <MainForm/> 
    <MainFooter/>

    </div>





    


    
 
    </div>
  
  );
};

export default HomePageMain;
