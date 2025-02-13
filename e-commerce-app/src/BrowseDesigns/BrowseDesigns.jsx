import Card from "../CardComponent.jsx/Card";

const BrowseDesigns = () => {

    let fetchedData =[
        {Category:'Casual', imageFit:'object-cover h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Fomer', imageFit:'object-fit w-full h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Party', imageFit:'object-fit w-full h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Gym', imageFit:'object-cover h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},

        

    ]







    return (
        <div className="lg:mx-24 bg-[#F0F0F0] py-10 rounded-4xl">
            <div>
                <div className="text-5xl font-bold my-10 grid justify-center">
                    <p>BROWSE BY DRESS STYLE</p>
                </div>

                <div className="grid grid-rows-2 mx-16 gap-4">
                    <div className="grid grid-cols-3 gap-4">
                 
                        {fetchedData.map((item , index) =>

                        <div className={`${index===1?'col-span-2':''} ${index===2?'col-span-2':''}`}>

                            <Card 
                            key={index}
                            Category={item.Category}
                            imageFit={item.imageFit} 
                            ProductImage={item.ProductImage}
                            
                            
                            />
                            </div>
                        

                              
                            )
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrowseDesigns;