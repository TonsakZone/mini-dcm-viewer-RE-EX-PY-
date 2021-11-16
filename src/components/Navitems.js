import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navigator.css"

class Navitems extends Component {
    render() {
        return (
            <li>
                <Link to={this.props.tolink}>{this.props.item}</Link>
                {/* <a href={linkaddr}>text to be shown</a> */}
            </li>
        );
    }
}

export default Navitems;