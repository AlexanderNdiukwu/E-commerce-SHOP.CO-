
import ReviewCard from "../CardComponent.jsx/ReviewCard";
import ReviewHeader from "./ReviewHeader";

const Reviews = () => {
    return ( <div className="lg:mx-24 py-4">


        <ReviewHeader/>

        <div>
            <ReviewCard rating='/images/CardImages/starRate.png' name='sarah' comment='loremmmmmmmmmmm'/>
        </div>


    </div> );
}
 
export default Reviews;