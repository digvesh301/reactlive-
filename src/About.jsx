import React from "react";
import Comman from "./Comman";
import img from '../src/images/Home.svg'
const About=()=>{
    return(
        <>
        <Comman names="Welcome to About" button="Contact" visit="/contact" img={img}/>
        </>
    );

}
export default About;