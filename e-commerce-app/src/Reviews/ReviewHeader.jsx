

const ReviewHeader = ({ scrollLeft, scrollRight }) => {
    return (  <div className=" lg:my-10 my-4 ">
        <div>

            <div className="flex justify-center">
                <div className=" text-center ">
                <p className="font-bold text-3xl lg:text-5xl whitespace-nowrap">OUR HAPPY CUSTOMER </p>
                </div>

            </div>


    


















         {/* this is the code to bring the area where i can use the right arrow and the left arrow i dont need since the comment area is just scroll  */}


            {/* <div className="grid grid-cols-3">
                <div className="col-span-2">
                <p className="font-bold text-4xl lg:text-5xl">OUR HAPPY CUSTOMER </p>
                </div>




                <div className="flex gap-4 justify-end items-end">
                    <p onClick={scrollLeft}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>

</p>

<p onClick={scrollRight}>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>


</p>

                </div>
            </div> */}

        </div>
    </div> );
}
 
export default ReviewHeader;