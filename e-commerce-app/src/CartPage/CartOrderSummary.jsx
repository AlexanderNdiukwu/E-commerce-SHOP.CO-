import CardOrderCard from "../CardComponent.jsx/CartOrderCard";

const CartOrderSumnmary = () => {
    return ( <div className="border-2 border-[#f0f0f0] rounded-3xl">

        <div className="py-5 px-4">

        <div className="py-3">
            <p  className="text-2xl font-bold">Order Summary </p>
            
        </div>

        <div>
            <CardOrderCard/>
        </div>

        </div>



            


    </div>
     );
}
 
export default CartOrderSumnmary;