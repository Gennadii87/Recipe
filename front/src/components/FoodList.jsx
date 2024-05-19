import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import axios from "axios";


function FoodList() {
       
    const category = useParams();
    const [isLoading, setLoading] = useState(true);
    const [foodlist, setDishes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/foodlist/?category=${category.id}`).then(res => {
            setDishes(res.data);
            setLoading(false);
        });
    }, []);


    if (isLoading) {        
        return <h1>Загрузка......{category.id}</h1>;
        }

    return (        
        <div>
            <h1>{foodlist[0].foodCategory}</h1>           
            <div className='recipe'>
                {foodlist.map((name) => (
                <p key={name.title}><a className="r" href={`/food/${name.id}`}>{name.title}</a></p>
                ))}
            </div>
        </div>
    );
};

export default FoodList;

