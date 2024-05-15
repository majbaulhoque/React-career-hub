import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-4xl text-black font-semibold'>Job Category List</h2>
            <p className='text-center text-base text-black mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5">
                {
                    categories.map(category => <CategoryCard key={categories.id} category={category}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default CategoryList;