import Card from "../CardComponent.jsx/Card";

const BrowseDesigns = () => {

    let fetchedData =[
        {Category:'Casual', imageFit:'object-cover h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Fomer', imageFit:'object-fit object-cover lg:w-full h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Party', imageFit:'object-fit object-cover lg:w-full h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},
        {Category:'Gym', imageFit:'object-cover h-72 rounded-4xl', ProductImage:'/images/CardImages/BrowseDress.png'},

        

    ]







    return (
        <div className="lg:mx-24 mx-3  bg-[#F0F0F0] py-5 lg:py-10 rounded-4xl">
            <div>
                <div className="lg:text-5xl text-4xl lg:w-full text-center  font-bold lg:my-10 grid my-3  justify-center">
                    <p className="w-56 lg:w-full ">BROWSE BY DRESS STYLE</p>
                </div>

                <div className="grid lg:mx-16 mx-8 gap-4">
                <div className='grid lg:grid-cols-3 gap-4 '>
                        {fetchedData.map((item , index) =>

                        <div  key={index} className={`${index===1?'lg:col-span-2':''} ${index===2?'lg:col-span-2':''}`}>
                            <Card 
                            
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