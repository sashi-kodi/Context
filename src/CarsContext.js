import React from 'react';
const CarsContext= React.createContext({cars:[],
                                       incrementPrice:(id)=>{},
                                        decrementPrice:(id)=>{}
                                       });
export default CarsContext;