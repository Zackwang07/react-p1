import React, { useState } from 'react';

function LarryComp(props) {

    console.log(props);
    function myOnClick(e) {
        console.log("We just clicked in LarryComp");
        props.countFunc();
    }

    return (
        <div>
            <h1 onClick={myOnClick}>Hello World from Larry Comp {props.countx}</h1>
            {/* <h1>onClick={myOnClickCount} Hello World: count {count}</h1> */}
        </div>
    )
}

export default LarryComp;