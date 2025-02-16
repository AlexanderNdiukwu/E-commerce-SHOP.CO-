import View from '../ButtonComponent/View'

const Categorystyle = () => {
    return ( <div>
        <div className="py-10">

            <div className="py-4">
                <p className="text-xl font-bold">Dress Style</p>
            </div>
            <div className="text-base  text-[#00000099] h-full grid gap-5">
            <div>
                <p>T-Shirt</p>
            </div>
            <div>
                <p>Shorts</p>
            </div>
            <div>
                <p>Shirts</p>
            </div>
            <div>
                <p>Hoodies</p>
            </div>
            <div>
                <p>Jeans</p>
            </div>
            <div className='bg-black text-white overflow-hidden rounded-4xl border-2' >
                <View view='Apply Filter'/>
            </div>
        </div>





        </div>
    </div> );
}
 
export default Categorystyle;