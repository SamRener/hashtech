import React, { Component } from 'react';
import api from '../../services/api';

import loading from '../../assets/loading.gif';
import logo from '../../assets/logo.jpg';
import './Index.css';
export default class Index extends Component{
    state = {
        signin: false
    };

    handleLogin = async e => {
        e.preventDefault();
console.log(e);

        this.setState({signin: true});
        const usuario = await api.post('/Usuario/Login', {
            nick: e.target.login_nick.value,
            senha: e.target.login_senha.value
        });

        if(usuario != null) {
            localStorage.setItem('@HashTechStorage:usuario', JSON.stringify(usuario));
            this.setState({signin: false});
            this.props.history.push(`/dashboard`); 
        }else{
            localStorage.setItem('@HashTechStorage:usuario', null);
            this.setState({
                signin: false,
                failure: true
            });
            
        }
    };
    render(){
        return (
            <div id="login-container">
                { this.state.signin? (
                    <img src={loading} alt="" />
                ) : (
                    <form onSubmit={this.handleLogin}>
                    <img src={logo} alt="" height="300px"/>
                    <input id="login_nick" placeholder="Login" />
                    <input id="login_senha" placeholder="Senha" type="password" />
                    <button type="submit">Enviar</button>
                </form> 
                ) }
             </div>   
        );
    }
}