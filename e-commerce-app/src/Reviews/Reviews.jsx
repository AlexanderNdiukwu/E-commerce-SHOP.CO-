import { useRef } from "react";
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import ReviewHeader from "./ReviewHeader";

const Reviews = () => {
    const scrollRef = useRef(null);

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
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        console.log('it is working ')
      };
      
      const scrollRight = () => {
        console.log ('it is working')
        scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
      };
      





    return ( <div className="lg:mx-24 mx-3 py-4">


        <ReviewHeader scrollLeft={scrollLeft} scrollRight={scrollRight}/>

        <div ref={scrollRef} className= " relative w-full   ">


        {reviewData.length > 0 ? 

            <div className="ref={scrollRef} flex overflow-x-scroll scroll-smooth  gap-2 lg:gap-4">
                
            {reviewData.map((item,index) => 
            <div  key={index} className="lg:min-w-1/4 min-w-full p-4">


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