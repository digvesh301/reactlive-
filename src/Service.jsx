import React, { useDebugValue } from "react";
import { NavLink } from "react-router-dom";
import Arry from "./Array";

const Service=()=>{
    const Card=(props)=>{
       return( <>
            <div className="col-md-4 col-10 mx-auto">
            <div class="card" >
                    <img src={props.img} class="card-img-top" alt="..." height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a  href={props.link} className="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>
        </div>
    </>);
    }
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Arry.map((index,value)=>{
                                //    console.log(index.card_title);
                                return <Card img={index.img} title={index.card_title} link={index.link}/>
                                })
                            }
                        </div>
                    </div>

                </div>
               
             </div>
        </div>

    
        </>
    );

}
export default Service;