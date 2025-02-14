
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import ReviewHeader from "./ReviewHeader";

const Reviews = () => {

    let reviewData = [

        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        // {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        // {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        // {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        
    ]






    return ( <div className="lg:mx-24 mx-3 py-4">


        <ReviewHeader/>
        {reviewData.length > 0 ? 

            <div className="grid lg:grid-cols-4  gap-2">

            {reviewData.map((item,index) => 

                    <ReviewCard
                    key={index}
                    rating={item.rating}
                    name={item.name}
                    comment={item.comment}


                    />




)}

        </div>
:

<div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">NO COMMENTS YET .</div>


}



          


      

    </div> );
}
 
export default Reviews;