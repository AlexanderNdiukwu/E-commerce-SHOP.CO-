const ProductHeader = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:gap-3">
            <div className=" flex flex-col lg:flex-none gap-2 justify-center lg:order-1">
                <div className="rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-40" />
                </div>
                <div className="lg:py-2 rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-40" />
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-40" />
                </div>
            </div>

            <div className="flex justify-center rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:ml-4 lg:order-2">
                <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="object-cover h-full w-full lg:w-auto" />
            </div>
        </div>
    );
}

export default ProductHeader;