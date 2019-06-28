import React from 'react';
const Car=(props)=>{
    return(
    <React.Fragment>
        <p>Car Name: {props.car.name}</p>
        <p>Car Price: {props.car.price}</p>
        <button onClick={props.incrementPrice}>Increment</button>
         <button onClick={props.decrementPrice}>Decrement</button>
    </React.Fragment>
    )
}
export default Car;