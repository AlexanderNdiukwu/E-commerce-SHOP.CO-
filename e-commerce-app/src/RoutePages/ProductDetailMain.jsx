import MainForm from "../EmailForm/MainForm";
import MainFooter from "../Footer/MainFooter";





const ProductDetailMain = () => {
    return ( <div>




  <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
                <div className="order-2 lg:order-1">
                    {/* Content for the left side on large screens, top on mobile */}
                    <div className="bg-red-500 p-4">Content R</div>
                </div>
                <div className="order-1 lg:order-2">
                    {/* Content for the right side on large screens, bottom on mobile */}
                    <div className="bg-blue-500 p-4">Content S</div>
                </div>
            </div>












    <MainForm/> 
    <div className="bg-[#F0F0F0]">
    <MainFooter/>

    </div>



        
        
    </div> );
}
 
export default ProductDetailMain;