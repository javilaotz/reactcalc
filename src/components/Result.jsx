import React from 'react'
import { InputGroup, InputGroupText, InputGroupAddon, Input, Badge } from 'reactstrap'

import '../App.css'

export default function Result(props) {
    return (
        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroupText> <span className="operator"><Badge color="primary" pill>{props.operator}</Badge></span></InputGroupText>
            </InputGroupAddon>
            <Input name="result" value={props.displayNumber()} onChange={() => null}/>
        </InputGroup>
    )
}
