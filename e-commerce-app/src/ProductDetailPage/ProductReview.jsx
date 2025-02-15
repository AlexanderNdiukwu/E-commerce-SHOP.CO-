import ProductReviewnav from "./ProductReviewNav";
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import View from "../ButtonComponent/View";



const ProductReview = () => {
    let reviewData = [

        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' ,posted:'August , 2021'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        
    ]








    return ( <div>

      
        <div>
            <div>
                <ProductReviewnav/>
            </div>


            {reviewData.length > 0 ? 

<div className="grid lg:grid-cols-2  gap-2">

{reviewData.map((item,index) => 


 
<div key={index} className="border border-[#00000099] rounded-3xl">
    <ReviewCard
     
    rating={item.rating}
    name={item.name}
    comment={item.comment}
    posted={item.posted}



    />

</div>




)}

</div>
:

<div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">NO COMMENTS YET .</div>


}

<div className="grid lg:justify-center my-10">

    <View view='Load More Reviews'/>

</div>




        </div>

    </div> );
}
 
export default ProductReview;