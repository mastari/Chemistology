import React, {Component} from "react"  
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return(
            <div>
                <h1>Chemistry labs will never be the same.</h1>
                <br></br>
                <button type="button" className="btn btn-primary">Oh really?</button>
            </div>
        )
    }
}