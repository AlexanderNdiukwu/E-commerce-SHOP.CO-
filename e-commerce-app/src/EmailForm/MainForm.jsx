const MainForm = () => {
    return (
        <div className="relative top-18 lg:mx-24 mx-3 bg-black text-white rounded-2xl">
            <div className="grid lg:grid-cols-2 justify-between py-7 px-7">
                <div className="text-4xl font-bold">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </div>
                <div className="grid justify-center py-5 lg:py-0 gap-3 relative">
                    <div className="relative w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Enter your email address"
                            className="pl-15 py-1 rounded-4xl w-full outline-none border-none text-black bg-white"
                        />
                    </div>
                    <div className="bg-white py-1 text-black text-center rounded-4xl grid items-center px-24">
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainForm;