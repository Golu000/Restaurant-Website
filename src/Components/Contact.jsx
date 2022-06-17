import React from "react";

function Contact(){
    return(
        <div id="contact">
            <h1>RAISE YOUR QUERY</h1>
            <form>
                <input type="text" placeholder="Full Name"/>
                <input type="tel" placeholder="Contact Number" pattern="[0-9]{10}"/>
                <input type="email" placeholder="E-Mail ID"/>
                <textarea placeholder="Write details here..."></textarea>
                <input type="submit" value="BOOK"/>
            </form>
        </div>
    )
}

export default Contact;