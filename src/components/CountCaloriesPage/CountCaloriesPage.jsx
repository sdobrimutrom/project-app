import React from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import Footer from "../Footer/Footer";
import CalorieCounter from "./CalorieCounter";


function CountCaloriesPage() {

   
    return (
        <div>
            <Header/>
            <CalorieCounter/>
            <Form/>
            <Footer/>
        </div>
    );
}

export default CountCaloriesPage;