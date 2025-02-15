const MainForm = () => {
    return ( <div className=" relative top-18 lg:mx-24 mx-3 bg-black text-white rounded-2xl">
        <div className="grid lg:grid-cols-2 justify-between py-7 px-7">
            <div className="text-4xl font-bold">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS 
            </div>
            <div className="grid justify-center py-5 lg:py-0 gap-3">
                <div>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                    </p>
                </div>
                <div className="bg-white rounded-4xl text-center flex items-center justify-center outline-0 border-0 text-black">
                <input type="text"
                placeholder="Enter your email address"
                className="pl-10 py-0.5 rounded-md w-56"
                 />

                </div>
                <div className="bg-white text-black text-center rounded-4xl grid items-center px-24">
                <button>Subscribe to Newletter</button>

                </div>
            </div>
        </div>
    </div> );
}
 
export default MainForm;