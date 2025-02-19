import CardOrderCard from "../CardComponent.jsx/CartOrderCard";

const CartOrderSumnmary = ({Subtotal,DiscountCount,Discount,DeliveryFee,Total}) => {
    return ( <div className="border-2 border-[#f0f0f0] rounded-3xl">

        <div className="py-5 px-4">

        <div className="py-3">
            <p  className="text-2xl font-bold">Order Summary </p>
            
        </div>

        <div>
            <CardOrderCard  Subtotal={Subtotal} DiscountCount={DiscountCount} Discount={Discount} DeliveryFee={DeliveryFee} Total={Total}/>
        </div>

        </div>



            


    </div>
     );
}
 
export default CartOrderSumnmary;