import React from "react";
import { NavLink } from "react-router-dom";


const Comman=(props)=>{
    return(
        <>
        <selction id="header" className="d-flex align-items-center">
            
            <div className="abc">
                <div className="row">
                    <div className="col-9 mx-auto">
                    <div className="row">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 oreer-lg-1">
                            <h1>{props.names}<br></br><strong className="text-info">Jay Group</strong></h1>
                        <h3 className="my-3">
                            we are the team of talented developer making websites
                        </h3>
                        <div className="mt-3">
                            <NavLink to={props.visit} class="btn btn-outline-primary rounded-pill">{props.button}</NavLink>
                        </div>
                        </div>

                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <div className="animated">
                            <img src={props.img} className="img-fluid animated" alt="homeimg"></img>

                        </div>

                    </div>
                    </div>
                </div>

</div>
            </div>
        </selction>
        </>
    );

}
export default Comman;