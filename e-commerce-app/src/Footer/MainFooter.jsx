import Footerdets from "./Footerdets";
import Footerdets2 from "./Footerdets2";
import Footerdets3 from "./Footerdets3";
import Footerdets4 from "./Footerdets4";
import Footerdets5 from "./Footerdets5";
import FooterFotLast from "./FooterFotLast";


const MainFooter = () => {
    return ( 
        <div className="py-19 lg:mx-24 mx-3 ">
            <div className="grid grid-cols-5 justify-start gap-2 items-center border-b-1 py-5  ">
                <div className="col-span-5 lg:col-span-1">

            <Footerdets/>

                </div>

                <div className="grid grid-cols-2 col-span-5 lg:col-span-2">

                <div>
                <Footerdets2/>

                </div>
                <div>
                <Footerdets3/>

                </div>
                </div>

                <div className="grid col-span-5 grid-cols-2 lg:col-span-2">
                <div>
                <Footerdets4/>

                </div>
                <div>
                <Footerdets5/>

                </div>

                </div>


              

           
           
        </div>

        <div>
        <FooterFotLast/>
        </div>
    </div>  );
}
 
export default MainFooter;