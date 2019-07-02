import React, { useState } from 'react'
import { Card, CardBody } from 'reactstrap';

import '../App.css'
import Result from './Result'
import Buttons from './Buttons'

export default function Calculator({setVisible}) {
    const [Value, setValue] = useState([]);
    const [nextValue, setnextValue] = useState([]);
    const [operator, setOperator] = useState("");

    //Clear function : reset to the start values
    const clear = () => {
        setValue([])
        setnextValue([])
        setOperator("")
    }

    //Equal function : process the values and the operator to return the result
    const equal = () => {
        if( operator.length > 0 && displayNumber()>0 ){
            let number = ""
            Value.forEach(x => {
                number = number+x;
            });
            let nextNumber = ""
            nextValue.forEach(x => {
                nextNumber = nextNumber+x;
            });

            let result = eval(number+operator+nextNumber) //eval is a nonsecure function

            //reset fields and states
            clear()
            setValue([result])

            return result
        }else {
            setVisible(true) //display the alert message
            //next: build a custom fn to send a custom message and the type of the alert to extend usability
        }
    }

    //Displays the number into the input according to the operator
    const displayNumber = () => {
        let number = ""
        let sourceVal = []

        operator.length>0
        ? sourceVal = [...nextValue] 
        : sourceVal = [...Value]
        
        sourceVal.length > 0 && sourceVal.forEach(val => {
            number += val
        });

        return number
    }
    return (
        <div>
            <Card>
                <CardBody>
                    <Result 
                        displayNumber={displayNumber} 
                        Value={Value} 
                        nextValue={nextValue} 
                        operator={operator}/>
                    <Buttons 
                        displayNumber={displayNumber} 
                        setValue={setValue} 
                        setnextValue={setnextValue} 
                        Value={Value} 
                        nextValue={nextValue} 
                        setOperator={setOperator} 
                        operator={operator} 
                        clear={clear} 
                        equal={equal}/>
                </CardBody>
            </Card>
        </div>
    )
}
