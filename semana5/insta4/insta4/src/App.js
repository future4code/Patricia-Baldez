import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-935756.jpg&fm=jpg'}
          fotoPost={'https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-935756.jpg&fm=jpg'}
        />
        <Post
          nomeUsuario={'joana'}
          fotoUsuario={'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg'}
          fotoPost={'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?cs=srgb&dl=pexels-bess-hamiti-35537.jpg&fm=jpg'}
        />
        <Post
          nomeUsuario={'mariana'}
          fotoUsuario={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'}
          fotoPost={'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg'}
        />
      </MainContainer>
    );
  }
}

export default App;
