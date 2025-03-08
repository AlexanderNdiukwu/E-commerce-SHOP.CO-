
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import ReviewHeader from "./ReviewHeader";

const Reviews = () => {


    let reviewData = [

        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        {rating:'/images/CardImages/starRate.png', name:'sarahsmd,kskksksckididih', comment:'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'},
        
    ]
  

    return ( <div className="lg:mx-24 mx-3 py-4">


        <ReviewHeader/>

        <div  className= " relative w-full   ">


        {reviewData.length > 0 ? 

            <div className=" flex overflow-x-scroll scroll-smooth  gap-2 lg:gap-4">
                
            {reviewData.map((item,index) => 
            <div  key={index} className="lg:min-w-1/4 min-w-full py-2">


                    <ReviewCard
                   
                    rating={item.rating}
                    name={item.name}
                    comment={item.comment}
                    
                    
                    />
            </div>
                )}
        </div>
:

<div className="text-center text-gray-500 font-bold  animate-bounce shadow-2xl">NO COMMENTS YET .</div>


}

</div>


          


      

    </div> );
}
 
export default Reviews;