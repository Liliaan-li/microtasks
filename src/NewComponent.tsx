import React from 'react';
// import {topCars} from "./App";

type carType = {
    manufacturer: string
    model: string
}
type NewComponentType = {
    cars: Array<carType>;
}
//
const NewComponent = (props: NewComponentType) => {
    return (
        <table>
             <tr>
                 <th>Manufacturer</th>
                 <th>Model</th>
             </tr>
                    {props.cars.map((objectsFromCars) => {
                            return (
                                   <tr key={objectsFromCars.manufacturer}>
                                        <td>{objectsFromCars.manufacturer} </td>
                                        <td>{objectsFromCars.model}</td>
                                    </tr>
                            )
                        }
                    )}
        </table>
    );
};

export default NewComponent;