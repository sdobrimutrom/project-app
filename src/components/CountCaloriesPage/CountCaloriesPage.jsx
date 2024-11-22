import React, { useState } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import CalorieCounter from "./CalorieCounter";
import ProductSlider from "./ProductSlider";
import cottageCheeseImg from "../../images/cottageCheese.png";
import eggsImg from "../../images/eggs.png";
import chickenImg from "../../images/chicken.png";

function CountCaloriesPage() {

    const products = [
        {
            id: 1,
            name: "Творог",
            image: cottageCheeseImg,
            kbzu: { calories: 145, protein: 21, fat: 5, carbs: 3},
        },
        {
            id: 2,
            name: "Куриные яйца",
            image: eggsImg,
            kbzu: { calories: 157, protein: 12.7, fat: 11.5, carbs: 0.7},
        },
        {
            id: 3,
            name: "Куриная грудка",
            image: chickenImg,
            kbzu: { calories: 113, protein: 23.6, fat: 1.9, carbs: 0.4},
        },
        {
            id: 4,
            name: "Творог",
            image: cottageCheeseImg,
            kbzu: { calories: 145, protein: 21, fat: 5, carbs: 3},
        },
        {
            id: 5,
            name: "Куриные яйца",
            image: eggsImg,
            kbzu: { calories: 157, protein: 12.7, fat: 11.5, carbs: 0.7},
        },
        {
            id: 6,
            name: "Куриная грудка",
            image: chickenImg,
            kbzu: { calories: 113, protein: 23.6, fat: 1.9, carbs: 0.4},
        },
    ];

    
    return (
        <div>
            <Header/>
            <p>Count Calories</p>
            <CalorieCounter/>
            <ProductSlider products={products}/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default CountCaloriesPage;