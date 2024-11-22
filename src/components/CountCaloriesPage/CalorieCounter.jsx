import React, { useState } from "react";
import "./caloriesCounter.css";
import ProductSlider from "./ProductSlider";
import cottageCheeseImg from "../../images/cottageCheese.png";
import eggsImg from "../../images/eggs.png";
import chickenImg from "../../images/chicken.png";

const CalorieCounter = () => {
    const [gender, setGender] = useState(null);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [goal, setGoal] = useState(null);
    const [calories, setCalories] = useState(null);

    const calculateCalories = () => {
        if (!gender || !weight || !height || !age || !goal) {
            alert("Пожалуйста, заполните все поля!")
            return;
        }

        const weightValue = parseFloat(weight);
        const heightValue = parseFloat(height);
        const ageValue = parseInt(age, 10);
    
        let bmr = gender === "male"
            ? 88.36 + (13.4 * weightValue) + (4.8 * heightValue) - (5.7 * ageValue)
            : 447.6 + (9.2 * weightValue) + (3.1 * heightValue) - (4.3 * ageValue);
    
        if (goal === "gain") bmr *= 1.2;
        if (goal === "lose") bmr *= 0.8;
    
        setCalories(Math.round(bmr));
    }

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
        <>
            <div className="calories-counter">
                <div className="set-sex">
                    <h3>Ваш пол:</h3>
                    <button onClick={() => setGender("male")}
                        className={`button ${gender === "male" ? "selected" : ""}`}>Мужской</button>
                    <button onClick={() => setGender("female")}
                        className={`button ${gender === "female" ? "selected" : ""}`}>Женский</button>
                </div>
                <div>
                    <div className="set-specs">
                        <h3>Ваш вес:</h3>
                        <input type="number"
                            placeholder="Вес (кг)"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}/>
                        <h3>Ваш рост:</h3>
                        <input type="number"
                            placeholder="Рост (см)"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}/>
                    </div>
                    <div className="set-age">
                        <h3>Ваш возраст:</h3>
                        <input type="number"
                            placeholder="Возраст (лет)"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}/>
                    </div>
                </div>
                <div className="set-goal">
                    <h3>Ваша цель:</h3>
                    <button onClick={() => setGoal("gain")}
                        className={`button ${goal === "gain" ? "selected" : ""}`}>Набрать массу</button>
                    <button onClick={() => setGoal("lose")}
                        className={`button ${goal === "lose" ? "selected" : ""}`}>Похудеть</button>
                    <button onClick={() => setGoal("maintain")}
                        className={`button ${goal === "maintain" ? "selected" : ""}`}>Остаться в форме</button>
                </div>
                <button onClick={calculateCalories} className="count-btn">Рассчитать</button>
            </div>
            <div>
                {calories && (
                    <div>
                        <div className="total-calories">
                            <h3>Ваша норма калорий: <span>{calories} ККАЛ</span></h3>
                        </div>
                        <ProductSlider products={products}/>
                    </div>
                )}
            </div>
        </>
        
        
    );
};

export default CalorieCounter;