import React, {Component} from "react"
import { Button } from 'reactstrap';

export default class App extends Component {
    render() {
        return(
            <div>
                <h1>The chemistry class just got wings.</h1><br/>
                <Button color="primary">See our plans</Button>
            </div>
        )
    }
}