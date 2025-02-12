const MainForm = () => {
    return ( <div className=" relative top-18 mx-24 bg-black text-white rounded-2xl">
        <div className="grid grid-cols-2 justify-between py-7 px-7">
            <div className="text-4xl font-bold">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS 
            </div>
            <div className="grid justify-center gap-3">
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