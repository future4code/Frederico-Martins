import React from "react";
import Trocartela from "./Trocartela";
import axios from "axios";
const baseUrl ='https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
  headers: {
    Authorization: 
    'fred-martins-shaw'
  }
}
 export default class App extends React.Component{
  state = {
    User: [],
    inputEmail: "",
    inputNome:"",
  };
  onChangeName = (event) => {
    this.setState({
      inputName: event.target.value
    });
  };
  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value
    });
  };
  poster = () => {
    //body é criado com o valor que tem no inputName
    const body =  {
      "name": this.state.inputNome,
      "email": this.state.inputEmail
  } ;
    //Aqui é onde a função de post é chamada
    //No pot passamos a url, body, e o headers
    axios
      .post(`${baseUrl}`, body, headers)
      .then((res) => {
        //Pegartodas as playlists
        this.getAllPlaylist();
        //Deixar o texto do input com um valor vazio
        this.setState({
          inputName: "",
          inputEmail:"",
        });
      })
      .catch((err) => {
        //Alertar caso um erro aconteça
        alert(err.response.data.message);
      });
  };
  
  render( ) {
    
    return (

      <div>
        <Trocartela 
        inputNome = {this.state.inputNome}
        inputEmail = {this.state.inputEmail}
        onChangeName = {this.onChangeName}
        onChangeEmail = {this.onChangeEmail}
        Poster = {this.poster}
        
        />
      </div>
      
    )
  }


 }
