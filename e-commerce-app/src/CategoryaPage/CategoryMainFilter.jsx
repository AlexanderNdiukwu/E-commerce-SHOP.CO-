import CategoryColorSelect from "./CategoryColorSelect";
import CategoryFilterHead from "./CategoryFilterHead";
import CategoryPriceRange from "./CategoryPriceRange";
import CategorySelectType from "./CategorySelectType";
import CategorySize from "./CategorySize";
import Categorystyle from "./CategoryStyle";

const CategoryMainFilter = ({ toggleFilter }) => {
    return (
        <div className="border-2  lg:px-6 px-5 border-black rounded-tl-3xl rounded-tr-3xl lg:w-96 h-auto">
            <div>
                <CategoryFilterHead toggleFilter={toggleFilter} />
            </div>
            <div >
                <CategorySelectType />
            </div>
            <div>
                <CategoryPriceRange />
            </div>
            <div>
                <CategoryColorSelect />
            </div>
            <div>
                <CategorySize />
            </div>
            <div>
                <Categorystyle />
            </div>
        </div>
    );
}

export default CategoryMainFilter;