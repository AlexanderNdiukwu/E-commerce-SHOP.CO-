import Card from "../CardComponent.jsx/Card";
import View from "../ViewButton/View";

const NewArrivals = () => {
    return ( <div className="lg:mx-24">
    

    <div>
        <div className="text-5xl font-bold my-10 grid justify-center">
            NEW ARRIVALS 
        </div>

        <div className="grid grid-cols-4 gap-5">

            <Card imageFit='w-full' ProductImage='/images/CardImages/image.png' desc='t-shirt' rating='/images/CardImages/starRate.png' price="$20" OriginalPrice='ddd ' discount='e'/>
            <Card imageFit='w-full' ProductImage='/images/CardImages/image.png' desc='jeans' rating='/images/CardImages/starRate.png' price="$20" />
            <Card imageFit='w-full' ProductImage='/images/CardImages/image.png' desc='t-shirt' rating='/images/CardImages/starRate.png' price="$20" OriginalPrice='ddd ' discount='e'/>
            <Card imageFit='w-full' ProductImage='/images/CardImages/image.png' desc='t-shirt' rating='/images/CardImages/starRate.png' price="$20" OriginalPrice='ddd ' discount='e'/>
         

        </div>

        <div className="grid justify-center my-10">
            <View/>
        </div>
    </div>




    </div> );
}
 
export default NewArrivals;