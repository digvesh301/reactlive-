import React from "react";
import Comman from "./Comman";
import img from '../src/images/lion.jpg'
const Home=(props)=>{
    return(
        <>
            <Comman names="Grow your business with" button="Get Started" visit="/service" img={img}/>
        
        </>
    );

}
export default Home;