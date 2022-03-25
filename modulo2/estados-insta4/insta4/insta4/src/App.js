import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    pessoas: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      
      
    ],
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost:""
    
  }
  
  onChangeInputNome = ( event)=>{
    this.setState({ valorInputNome: event.target.value });

  }
  onChangeInputFotoUsuario = ( event)=>{
    this.setState({ valorInputFotoUsuario: event.target.value });

  }
  onChangeInputFotoPost = ( event)=>{
    this.setState({ valorInputFotoPost: event.target.value });

  }
  adicionaPostagem = () => {
    // Colocamos em uma variavel o objeto que representa uma nova pessoa
    const novaPostagem = {
      // Puxamos da variavel de estado "valorInputPessoa" o nome dela
      nomeUsuario: this.state.valorInputNome,
      // Puxamos da variavel de estado "valorInputEmail" o email dela
      fotoUsuario: this.state.valorInputFotoUsuario,
      
      fotoPost:this.state.valorInputFotoPost
    };

    // Copia array de pessoas e adiciona uma pessoa no final
    const novoPostagens = [...this.state.pessoas, novaPostagem];

    // Define o estado "pessoas" como a variavel "novoPessoas"
    this.setState({ pessoas: novoPostagens, valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost:"" });
  };
  render() {
    const list = this.state.pessoas.map(fulando => {
      return (
        <Post
          nomeUsuario={fulando.nomeUsuario}
          fotoUsuario={fulando.fotoUsuario}
          fotoPost={fulando.fotoPost}
        
        />
        
      )
    })
    return <MainContainer>
      {list}
      <input 
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
      <input 
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto Usuario"}
          />
      <input 
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto Post"}
          />
          <button onClick={this.adicionaPostagem} > Adicionar</button>

    </MainContainer>
  }
}

export default App
