import React from 'react'

export default class Trocartela extends React.Component {
  render() {

    return (
      <div>
        <button>Trocar de tela</button>
        <div>
          <input type="text" value={this.props.inputNome} onChange={this.props.onChangeName} placeholder ="Nome" />
          <input type="text" value={this.props.inputEmail} onChange={this.props.onChangeEmail}placeholder ="E-mail" />
          <button onClick={this.props.Poster}>Criar Usuário</button>
        </div>
      </div>
    )
  }
}
