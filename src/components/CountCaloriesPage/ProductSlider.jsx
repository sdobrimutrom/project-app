import React from "react";
import Slider from "react-slick";


const ProductSlider = ({products}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image}/>
                    <h3>{product.name}</h3>
                    <ul>
                        <li>Калории: {product.kbzu.calories}</li>
                        <li>Белки: {product.kbzu.protein}</li>
                        <li>Жиры: {product.kbzu.fat}</li>
                        <li>Углеводы: {product.kbzu.carbs}</li>
                    </ul>
                </div>
            ))}
        </Slider>
    );
};

export default ProductSlider;