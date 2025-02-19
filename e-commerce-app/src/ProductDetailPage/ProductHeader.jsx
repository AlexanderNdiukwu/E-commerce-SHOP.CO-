const ProductHeader = ({ProductMore}) => {








    return (
        <div className="flex flex-col-reverse lg:flex-row lg:gap-3">
            <div className="flex flex-row lg:flex-col gap-6  lg:my-0 my-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-45 lg:w-40 " />
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-45 lg:w-40"  />
                </div>
                <div className="rounded-2xl overflow-hidden">
                    <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="w-45 lg:w-40" />
                </div>
            </div>

            <div className="flex justify-center rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:ml-4 lg:order-2">
                <img src="/images/FooterImages/Bclothe.png" alt="clothe" className="object-cover h-full w-full lg:w-auto" />
            </div>
        </div>
    );
}

export default ProductHeader;