import React from "react";
import "./style.css";
import Message from "../Message";
import MessageUser2 from "../MessageUser2";
// const userOne = [];
// const userTwo = [];

class Chat extends React.Component {
  render() {
    return (
      <div className="container">
        <MessageUser2 />
        <Message />
        <div className="formChat">
          <select class="w3-select" name="option">
            <option value="" disabled selected>
              Usuário
            </option>
            <option value="1">Usuário 1</option>
            <option value="2">Usuário 2</option>
          </select>
          <input type="text" placeholder="Mensagem" className="inputMsg" />
          <button type="submit">Enviar</button>
        </div>
      </div>
    );
  }
}
export default Chat;
