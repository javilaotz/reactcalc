import React from 'react'
import { Button, Row, Col } from 'reactstrap'

import '../App.css'

export default function Buttons(props){

    const setNumber = (number) => {
        props.operator.length > 0
        ? props.setnextValue([...props.nextValue, number])
        : props.setValue([...props.Value, number])
    }

    return (
        <div>
            <Row>
                <Col md="9"><Button color="primary"className="bt-large" onClick={()=>props.clear()}>Clear</Button></Col>
                <Col md="3"><Button color="primary" onClick={()=>props.setOperator("+")}>+</Button></Col>
            </Row>
            <Row>
                <Col md="3"><Button onClick={()=>setNumber("9")}>9</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("8")}>8</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("7")}>7</Button></Col>
                <Col md="3"><Button color="primary" onClick={()=>props.setOperator("-")}>-</Button></Col>
            </Row>
            <Row>
                <Col md="3"><Button onClick={()=>setNumber("6")}>6</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("5")}>5</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("4")}>4</Button></Col>
                <Col md="3"><Button color="primary" onClick={()=>props.setOperator("/")}>/</Button></Col>
            </Row>
            <Row>
                <Col md="3"><Button onClick={()=>setNumber("3")}>3</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("2")}>2</Button></Col>
                <Col md="3"><Button onClick={()=>setNumber("1")}>1</Button></Col>
                <Col md="3"><Button color="primary" onClick={()=>props.setOperator("*")}>*</Button></Col>
            </Row>
            <Row>
                <Col md="9"><Button className="bt-large" onClick={()=>setNumber("0")}>0</Button></Col>
                <Col md="3"><Button color="primary" onClick={()=>props.equal()}>=</Button></Col>
            </Row>
        </div>
    )
}
