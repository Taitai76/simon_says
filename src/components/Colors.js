import React, { useState } from "react";

function Colors({color}) {
    function onClick(){
        console.log(color)
    }
    return(
        <div className={`card ${color}`}
        onClick={onClick}
        ></div>
    );
}

export default Colors;
