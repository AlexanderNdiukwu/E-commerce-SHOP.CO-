import CartCard from "../CardComponent.jsx/CartCard";
import CartOrderSumnmary from "../CartPage/CartOrderSummary";
import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";

const CartMain = () => {

    let CartData = [
        {CartImage:'/images/CardImages/image.png', CartTitle:'T-Shirt',Size:'Large' ,Color:'white', ProdutPrice:'$154'},
        {CartImage:'/images/CardImages/image.png', CartTitle:'T-Shirt',Size:'Large' ,Color:'white', ProdutPrice:'$154'},
    ]


    let OrderTotal = [

        {Subtotal:'$546', DiscountCount:'20%', Discount:'-133',DeliveryFee:'$15',Total:'435'}
    ]

        
    








    return (<div className=" lg:mx-24 mx-3  border-[#f0f0f0] border-t-2">

        <div className=" my-5  ">
            <div className="font-bold lg:text-4xl text-3xl my-3">
                <p>YOUR CART</p>
            </div>

            

            <div className="grid lg:grid-cols-[1fr_505px] gap-5">

<div  className="border-2 border-[#f0f0f0] rounded-3xl">

                    {CartData.length >0 ?

                    (CartData.map((item,index)=>(
                        <CartCard 
                        key={index}
                        CartImage={item.CartImage} CartTitle={item.CartTitle} Size={item.Size} Color={item.Color} ProductPrice={item.ProdutPrice} 
                        />  
                    ))
                )
                
                :
                (
                    <div className="text-center text-gray-500 font-bold h-full  flex items-center justify-center     ">
                        <p className="animate-bounce"> You have no cart </p>
                        </div>
                )
            }
              
            </div>


                <div>
                    
                {OrderTotal.length > 0 ?

                    (OrderTotal.map((item,index)=>(
                        <CartOrderSumnmary 
                        key={index}
                        Subtotal={item.Subtotal} DiscountCount={item.DiscountCount} Discount={item.Discount} DeliveryFee={item.DeliveryFee} Total={item.Total} 
                        />  
                    ))
                    )

                    :
                    (
                    <div className="text-center text-gray-500 font-bold h-full  flex items-center justify-center     ">
                        <p className="animate-bounce"> You have no cart </p>
                        </div>
                    )
                    }

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