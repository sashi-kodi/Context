import React from 'react';
import CarsContext from '../CarsContext';
import Car from './Car';

const CarsList=()=>{
    return(
    <CarsContext.Consumer>
        {(context)=>(
            <React.Fragment>
               {context.cars.map((car,id)=>(
                   <Car key={car.id} car={car} incrementPrice={()=>context.incrementPrice(id)} decrementPrice={()=>context.decrementPrice(id)}/>
                ))}
            </React.Fragment>
        )}
    </CarsContext.Consumer >
        
    )
    
}
export default CarsList;