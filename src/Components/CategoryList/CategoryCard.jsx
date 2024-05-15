
const CategoryCard = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="my-20">
            <div className="shadow-md items-center text-center">
                <div className="items-center justify-center ml-24 mb-5 pt-10"><img className="w-16 " src={logo} alt="" /></div>
                <p className="text-2xl mb-2">{category_name}</p>
                <p className="pb-6">{availability}</p>
            </div>
        </div>
    );
};

export default CategoryCard;