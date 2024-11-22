import React from "react";
import Slider from "react-slick";
import "./productSlider.css"



const ProductSlider = ({products}) => {
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "50px",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };


    return (
        <div className="product-slider">
            <h2>Продукты, полезные к употреблению:</h2>
            <Slider {...settings} className="custom-slider">
                {products.map((product) => (
                    <div key={product.id}>
                        <div className="product">
                            <img src={product.image}/>
                            <h3>{product.name}</h3>
                            <ul>
                                <li>Калории: {product.kbzu.calories}</li>
                                <li>Белки: {product.kbzu.protein}</li>
                                <li>Жиры: {product.kbzu.fat}</li>
                                <li>Углеводы: {product.kbzu.carbs}</li>
                            </ul>
                        </div>
                        
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductSlider;