import React from "react";
import "./Form.css"

function Form() {
    return (
        <div className="form-block">
            <h3>Оставьте заявку</h3>
            <form>
                <div className="f-input">
                    <label for="femail">Электронная почта</label>
                    <input type="email" id="femail" name="femail" placeholder="example@mail.ru"/>
                </div>

                <div className="f-input">
                    <label for="fphone">Ваш телефон</label>
                    <input type="tel" id="fphone" name="fphone" placeholder="+7 (900) 123 99-99"/>
                </div>
                
                <div className="f-input">
                    <label for="fname">Ваше имя</label>
                    <input type="text" id="fname" name="fname" placeholder="Иванов Иван Иванович"/>
                </div>
                
                <div className="f-input">
                    <label for="ftype">Тип абонемента</label>
                    <select id="ftype" name="ftype">
                        <option value="all-inclusive">Все включено</option>
                        <option value="student">Студенческий</option>
                        <option value="day">Дневной</option>
                    </select>
                </div>
                <button type="submit" href="/">Оставить заявку</button>
            </form>
        </div>
    );
}

export default Form;