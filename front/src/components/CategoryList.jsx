import React, {useState, useEffect} from 'react';
import axios from "axios";

//import Category from './FoodList';


function CategoryList() {
    const [isLoading, setLoading] = useState(true);  
    const [category, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/category/").then((resp) => {
            setCategories(resp.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <h1>Выберите категорию:</h1>
        <div className="button">
            {category.map((name) => (
                <a key={name.id} className="button_name" href={`/foodlist/${name.id}`}>{name.name}</a>
            ))}
        </div>
        </>
    );
}


export default CategoryList
