import React from "react";
import Productbox from './Productbox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

function Product(){
    return(
        <div id="products">
            <h1>CHOOSE & ENJOY</h1>
            <p>Here are our tasty jaw dropping and customer favourtie burgers.</p>
            <div className="a-container">
                <Productbox image={pimage1} title="Lunger Chicken Burger" />
                <Productbox image={pimage2} title="Zinger Chicken Burger" />
            </div>
        </div>
    )
}

export default Product;