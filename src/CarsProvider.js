import React, {Component} from 'react';
import CarsContext from './CarsContext';

class CarsProvider extends Component{
    state={
        cars:[{id:1, name:'highlander toyota', price:40000},
              {id:2, name:'bmw 328i', price:55000},
             ]
    };
    incrementPrice = (carid)=>{
        let cars = [...this.state.cars];
      cars[carid].price = cars[carid].price+1;
      
        this.setState({cars});
    }
    decrementPrice = (carid)=>{
         let cars = [...this.state.cars];
       cars[carid].price = cars[carid].price-1;
      
        this.setState({cars});
    }
   render(){
       return(  
        <CarsContext.Provider value={{cars: this.state.cars, incrementPrice:this.incrementPrice, decrementPrice: this.decrementPrice}}>
            {this.props.children}
           </CarsContext.Provider>
       );
   }
}
export default CarsProvider;