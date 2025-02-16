const CategoryFilterHead = () => {
    return ( <div className="flex justify-between border-b-2 border-[#F0F0F0] py-10">

        <div>
            <p className="text-xl font-bold">Filter</p>
        </div>

        <div>
        <div className="bg-[#F0F0F0] py-1 px-3 rounded-3xl hidden lg:block " >
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>

                    </p>

        </div>

                <div className="grid lg:hidden">
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

                    </p>
                </div>
        </div>



    </div> );
}
 
export default CategoryFilterHead;