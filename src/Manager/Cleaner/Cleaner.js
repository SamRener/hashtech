import React, { Component } from 'react';

export default class Cleaner extends Component{

    componentDidMount(){
        localStorage.clear();
        this.props.history.push('/');
    }

    render(){
        return <div></div>
    }
}
