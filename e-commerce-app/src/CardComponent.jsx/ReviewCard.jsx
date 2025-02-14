const ReviewCard = ({ rating, name, comment }) => {
    return (
        <div className="shadow-lg rounded-3xl h-64 lg:w-80 p-4">
            <div className="grid items-center px-7 py-6 gap-2 h-full">
                <div className="grid justify-start w-full">
                    <img src={rating} alt="rating" />
                </div>

                <div className="grid justify-start w-full overflow-hidden">
                    <p className="truncate text-lg font-bold">{name}</p>
                </div>

                <div className="mt-1  max-h-32 text-sm  overflow-hidden">
                    <div className="w-full text-wrap overflow-hidden ">
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;