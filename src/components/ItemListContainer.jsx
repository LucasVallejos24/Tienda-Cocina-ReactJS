import React from "react";

function itemListContainer (props) {
    return (
        <div className="listContainer">
            <h1>{props.greeting}</h1>
        </div>
    );
}

export default itemListContainer