import React from "react";
import styled from "styled-components";

const UserList = styled.ul`
  list-style: none;
`;

const UserListItem = styled.li`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

export class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserList>
        <h2>Usuários Cadastrados:</h2>
        {this.props.users.map(user => (
          <UserListItem key={user.id}>
            {user.name}{" "}
            <DeleteButton onClick={() => this.props.onDeleteUser(user.id)}>
              X
            </DeleteButton>
          </UserListItem>
        ))}
      </UserList>
    );
  }
}
