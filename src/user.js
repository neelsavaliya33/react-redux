import React from "react";

const User = (props) => {
    return (
        <div className="App">
        <h2>User Component</h2>
        <h4>{props.data.name}</h4>
        <h4>{props.data.age}</h4>
        </div>
    )
}

export default User;
