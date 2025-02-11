const ReviewCard = ({rating,name,comment}) => {
    return ( <div>




        <div className="w-full border  ">
           
            <div className="grid items-center px-8 py-6">



            <div className="grid justify-start w-full">
                <img src={rating} alt="" />
            </div>

            <div className="grid justify-start w-full overflow-hidden">
                <p>{name} </p>
            </div>
            <div className="flex gap-2.5 ">
                <div>{comment}</div>
            
            </div>
            </div>
        </div>







    </div> );
}
 
export default ReviewCard;