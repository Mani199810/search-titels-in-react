import React from "react";
import { NavLink } from "react-router-dom";

function Pnf(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-danger">
                    <h1 className="display-3 text-success">
                    Requested not found
                    </h1>
                    <h3 className="">404-found</h3>
                <NavLink to={`/`}> back to Home</NavLink>

                </div>
            </div>
        </div>
    )
}
export default Pnf;