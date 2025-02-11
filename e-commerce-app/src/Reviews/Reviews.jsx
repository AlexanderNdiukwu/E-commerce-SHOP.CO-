
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import ReviewHeader from "./ReviewHeader";

const Reviews = () => {
    return ( <div className="lg:mx-24 py-4">


        <ReviewHeader/>

        <div className="grid grid-cols-4 gap-2">
            <ReviewCard rating='/images/CardImages/starRate.png' name='sarahsmd,kskksksckididih' comment='loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'/>
            <ReviewCard rating='/images/CardImages/starRate.png' name='benm' comment='loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'/>
            <ReviewCard rating='/images/CardImages/starRate.png' name='mum' comment='loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'/>
            <ReviewCard rating='/images/CardImages/starRate.png' name='dad' comment='loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm'/>
        </div>


    </div> );
}
 
export default Reviews;