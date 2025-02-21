import { useRef } from "react";
import ReviewHeader from "./ReviewHeader";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
    const reviewContainerRef = useRef(null);

    const reviewData = [
        { rating: '/images/CardImages/starRate.png', name: 'sarahsmd,kskksksckididih', comment: 'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' },
        { rating: '/images/CardImages/starRate.png', name: 'sarahsmd,kskksksckididih', comment: 'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' },
        { rating: '/images/CardImages/starRate.png', name: 'sarahsmd,kskksksckididih', comment: 'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' },
        { rating: '/images/CardImages/starRate.png', name: 'sarahsmd,kskksksckididih', comment: 'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' },
        { rating: '/images/CardImages/starRate.png', name: 'sarahsmd,kskksksckididih', comment: 'loremmmmmmmmkefnkesnfksnedvnsdfjsenfjsebfuies fifweifiwef fjwefiuhweifhweifhwef fwjiefbwufwfniuwe wejijdawidwhidhwhd dbwdjwdw dwuidwudhw duwdwuduw w dfw idhw d wd w d w dfw fwefbuwbiufbwuimmm' },
    ];

    const scrollLeft = () => {
        reviewContainerRef.current.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        reviewContainerRef.current.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    };

    return (
        <div className="lg:mx-24 mx-3 py-4">
            <ReviewHeader scrollLeft={scrollLeft} scrollRight={scrollRight} />
            {reviewData.length > 0 ? (
                <div ref={reviewContainerRef} className="grid lg:grid-cols-4 grid-flow-col w-full overflow-x-auto border gap-2">
                    {reviewData.map((item, index) => (
                        <ReviewCard
                            key={index}
                            rating={item.rating}
                            name={item.name}
                            comment={item.comment}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 font-bold animate-bounce shadow-2xl">NO COMMENTS YET.</div>
            )}
        </div>
    );
};

export default Reviews;