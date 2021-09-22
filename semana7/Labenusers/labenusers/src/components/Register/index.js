import React from "react";
import styled from "styled-components";

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;

  div {
    margin-bottom: 15px;
  }
`;

const RegisterButton = styled.button`
  margin: 0 auto;
  background-color: hsl(236, 32%, 26%);
  color: white;
  border: none;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;

  overflow: hidden;
  cursor: pointer;

  &::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }

  &:hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: ""
    };
  }

  handleOnInputChange = event => {
    const { target } = event;
    const { id, value } = target;

    this.setState({ [id]: value });
  };

  saveUser = () => {
    const { name, email } = this.state;
    this.props.onCreateUser(name, email);
  };

  render() {
    return (
      <RegisterWrapper>
        <div>
          <label forHtml="name">Nome:</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            onChange={this.handleOnInputChange}
            value={this.state.name}
          />
        </div>
        <div>
          <label forHtml="email">E-mail:</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            onChange={this.handleOnInputChange}
            value={this.state.email}
          />
        </div>
        <RegisterButton onClick={this.saveUser}>Salvar</RegisterButton>
      </RegisterWrapper>
    );
  }
}
