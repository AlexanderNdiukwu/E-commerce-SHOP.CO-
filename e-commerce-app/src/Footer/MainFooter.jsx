import Footerdets from "./Footerdets";
import Footerdets2 from "./Footerdets2";
import Footerdets3 from "./Footerdets3";
import Footerdets4 from "./Footerdets4";
import Footerdets5 from "./Footerdets5";
import FooterFotLast from "./FooterFotLast";


const MainFooter = () => {
    return ( 
        <div className="py-8 mx-24">
            <div className="grid grid-cols-5 justify-start gap-2 items-center border-b-1 py-5  ">
                <Footerdets/>
                <Footerdets2/>
                <Footerdets3/>
                <Footerdets4/>
                <Footerdets5/>


              

           
           
        </div>

        <div>
        <FooterFotLast/>
        </div>
    </div>  );
}
 
export default MainFooter;