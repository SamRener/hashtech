import React, { Component } from 'react';
import api from '../../services/api';

import './Dashboard.css';
export default class Dashboard extends Component{
    state = {
        signin: false,
        usuario: {},
        grupos: []
    };

  async componentDidMount(){ 
    
      const user = await JSON.parse(localStorage.getItem('@HashTechStorage:usuario')); 
      this.setState({usuario: user.data}); 
      const grupo = await api.get(`/Grupo/Usuario/${this.state.usuario._id}`); 
        this.setState({grupos: grupo.data});
       
  }
    render(){
        return (
            <div className="group-container">
            <div className="tab">
           {this.state.grupos && this.state.grupos.map(grupo =>(
               <button className="tablinks" onClick={this.changeGroup} key={grupo._id}>{grupo.nome}
                <span className="dot">{grupo.mensagens.length}</span>
               </button>
           ))} 
          </div>
          <div class="vl"></div>
          </div> 
        );
    }
}