import React, { useState } from "react";

function Score() {
    const [score, setScore]= useState(0);

    return(
        <p>${score}
        </p>
    );
}

export default Score;
