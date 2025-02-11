import Card from "../CardComponent.jsx/Card";

const BrowseDesigns = () => {
    return (
        <div className="lg:mx-24 bg-[#F0F0F0] py-10 rounded-4xl">
            <div>
                <div className="text-5xl font-bold my-10 grid justify-center">
                    <p>BROWSE BY DRESS STYLE</p>
                </div>

                <div className="grid grid-rows-2 mx-16 gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <Card Category='Casual' imageFit='object-cover h-72 rounded-4xl' ProductImage='/images/CardImages/BrowseDress.png' />
                        </div>

                        <div className="col-span-2 ">
                            <Card Category='Fomer' imageFit='object-fit w-full h-72 rounded-4xl' ProductImage='/images/CardImages/BrowseDress.png' />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className="col-span-2 overflow-hidden">
                            <Card  Category='Party' imageFit='object-fit w-full h-72 rounded-4xl ' ProductImage='/images/CardImages/BrowseDress.png' />
                        </div>

                        <div >
                            <Card  Category='Gym' imageFit='object-cover h-72 rounded-4xl' ProductImage='/images/CardImages/BrowseDress.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseDesigns;