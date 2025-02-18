import CartCard from "../CardComponent.jsx/CartCard";
import CartOrderSumnmary from "../CartPage/CartOrderSummary";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";

const CartMain = () => {
    return (<div className=" lg:mx-24 mx-3 border-[#0000001A] border-t-2">

        <div className=" my-5  ">
            <div className="font-bold text-4xl">
                <p>YOUR CART</p>
            </div>

            

            <div className="grid lg:grid-cols-[1fr_505px] gap-5">

                <div className="border-2 border-[#f0f0f0] rounded-3xl">
                <CartCard/>
                <CartCard/>
                <CartCard/>

                </div>

                <div>
                    <CartOrderSumnmary/>
                </div>

            </div>





















        </div>
       



















        
    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>


    </div>  );
}
 
export default CartMain;