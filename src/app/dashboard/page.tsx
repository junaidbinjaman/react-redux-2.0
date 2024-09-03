'use client';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';


const index = () => {
    const [food, setFood] = useState('');
    const foods = useSelector((state) => state.foods);
    const basket = useSelector((state) => state.basket);
    const likedFoods = useSelector((state) => state.likedFood);

    const dispatch = useDispatch();

    function addFoodHandler() {
        dispatch({type: 'ADD_FOOD', payload: food});
    }

    function addToBasketHandler(food) {
        dispatch({type: 'ADD_TO_BASKET', payload: food});
    }

    function addToLikedFoodHandler(food) {
        dispatch({type: 'ADD_TO_LIKED_FOOD', payload: food});
    }
    return (
        <div>
            <h1>Food Dashboard</h1>
            <div>
                <input
                    type='text'
                    placeholder='insert a food name'
                    value={food}
                    onChange={(e) => setFood(e.target.value)}
                />
                <button onClick={addFoodHandler}>Add Food</button>
            </div>
            <div>
                <h2>Food List</h2>
                <ul>
                    {foods.map((food, index) => (
                        <li key={index}>
                            {index + ' - ' + food}
                            <button onClick={(food) => addToBasketHandler(food)}>Add to Basket</button>
                            <button onClick={(food) => addToLikedFoodHandler(food)}>Like</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Food Basket List {basket.length}</h2>
                <ul>
                    {basket.map((food, index) => (
                        <li key={index}>
                            {index + ' - ' + food}
                            <button onClick={(food) => addToBasketHandler(food)}>Add to Basket</button>
                            <button>Like</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Liked Food List {likedFoods.length}</h2>
                <ul>
                    {likedFoods.map((food, index) => (
                        <li key={index}>
                            {index + ' - ' + food}
                            <button onClick={(food) => addToBasketHandler(food)}>Add to Basket</button>
                            <button>Like</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default index;
