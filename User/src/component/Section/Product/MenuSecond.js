import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuSecond extends Component {
    render() {
        return (
            <div>
                   <ul class="main-info-list container p-rl-0">
                    <li class="main-info-item active"><NavLink to={
                        "/Product/"+  this.props.id
                    }>{this.props.name}</NavLink></li>
                    <li class="main-info-item"><NavLink to={
                          "/ProductDetail/"+  this.props.id
                    }>Specification</NavLink></li>
                   
                </ul>
            </div>
        )
    }
}
