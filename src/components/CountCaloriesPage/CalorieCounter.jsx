import React, { useState } from "react"

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

    return (
        <div>
            <div>
                <h3>Ваш пол:</h3>
                <button onClick={() => setGender("male")}>Мужской</button>
                <button onCanPlay={() => setGender("female")}>Женский</button>
            </div>
            <div>
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

                <h3>Ваш возраст:</h3>
                <input type="number"
                    placeholder="Возраст (лет)"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div>
                <h3>Ваша цель:</h3>
                <button onClick={() => setGoal("gain")}>Набрать массу</button>
                <button onClick={() => setGoal("lose")}>Похудеть</button>
                <button onClick={() => setGoal("maintain")}>Остаться в форме</button>
            </div>

            <button onClick={calculateCalories}>Рассчитать</button>

            {calories && (
                <div>
                    <h3>Ваша норма калорий: {calories} ккал</h3>
                </div>
            )}
        </div>
        
    );
};

export default CalorieCounter;