import React, { useState } from "react";
import "./styled.css";

const Tela = () => {
  const [usuario, setUsuario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [arrayDeMensagens, setArrayDeMensagens] = useState([]);

  let mensagemEnviada = {
    usuario: usuario,
    mensagem: mensagem
  };

  const EnviarMensagem = () => {
    setArrayDeMensagens((arrayDeMensagens) => [
      ...arrayDeMensagens,
      mensagemEnviada
    ]);
    console.log(arrayDeMensagens);

  };

  return (
    <div className="Body">
      <div className="Quadrado-Meio">
        <div className="Comp-De-Baixo">
          <input
            type="text"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
            placeholder="Usúario"
            className="input1"
          />
          <input
            valuie={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
            placeholder="Mensagem"
            className="input2"
          />
          <button onClick={() => EnviarMensagem()} className="button">
            Enviar
          </button>
        </div>
        <div className="Box-Msg">
          {arrayDeMensagens.map((itens) => {
            return (
              <>
                <text>
                  {itens.usuario}: {itens.mensagem}
                </text>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tela;