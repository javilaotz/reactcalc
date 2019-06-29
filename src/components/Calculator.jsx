import React, { useState } from 'react'

import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

import '../App.css'
import Result from './Result'
import Buttons from './Buttons'

export default function Calculator(props) {
    const [result, setResult] = useState(0)

    return (
        <div>
            <Card>
                <CardBody>
                    <Result/>
                    <Buttons/>
                </CardBody>
            </Card>
        </div>
    )
}
