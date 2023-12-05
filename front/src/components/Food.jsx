import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Food() {
    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [food, setFood] = useState();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/cooking_recipe/food/?food_id=${id}`)
            .then(res => {
                setFood(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching food data:', error);
                setLoading(false);
            });
    }, [id]);

    if (isLoading) {
        return <h1>Загрузка.. </h1>;
    }

    // Проверка, что массив food существует и содержит элементы
    if (!food || food.length === 0) {
        return <h1>Рецепт не найден</h1>;
    }

    return (
        <>
            <h1>Категория: {food[0].foodCategory} </h1>
            <h1>Рецепт: {food[0].title}</h1>
            <hr />
            <div className='food'>
                <img src={food[0].image} alt="Food" crossOrigin="anonymous" />
                <br />
                <div className='text_recipe'>
                    <span style={{ whiteSpace: "pre-line" }}>{food[0].text}</span>
                </div>
            </div>
        </>
    );
}

export default Food;
