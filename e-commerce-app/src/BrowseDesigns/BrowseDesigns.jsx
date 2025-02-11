import Card from "../CardComponent.jsx/Card";

const BrowseDesigns = () => {
    return (
        <div className="lg:mx-24 bg-[#F0F0F0] py-10">
            <div>
                <div className="text-5xl font-bold my-10 grid justify-center">
                    <p>BROWSE BY DRESS STYLE</p>
                </div>

                <div className="grid grid-rows-2 mx-16 gap-4">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-full">
                            <Card imageFit='object-cover' ProductImage='/images/CardImages/image.png' />
                        </div>

                        <div className="col-span-2 h-full">
                            <Card imageFit='object-cover' ProductImage='/images/CardImages/image.png' />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 h-full">
                            <Card imageFit='object-cover' ProductImage='/images/CardImages/image.png' />
                        </div>

                        <div className="h-full">
                            <Card imageFit='object-cover' ProductImage='/images/CardImages/image.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseDesigns;