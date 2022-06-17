import React from "react";
import aboutimage from '../images/about.png'

function About(){
    return(
        <div id="about">
            <div className="about-text">
                <h1>ABOUT US</h1>
                <p>New prepared pot pie, strength plates of mixed greens, wood-let go pizzas, pasta, 
                    sandwiches, burgers, and more.Burger House heated merchandise and treats including 
                    our Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and delectably 
                    rich cream cheddar pies are prevalent top choices with our visitors.</p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=''/>
            </div>
        </div>
    )
}

export default About;