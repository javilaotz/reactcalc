import React, { Component } from 'react'
import { Input } from 'reactstrap'

export default class Result extends Component {
    render() {
        return (
            <div>
                <Input type="text" name="results" id="results" />
            </div>
        )
    }
}
