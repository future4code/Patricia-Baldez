import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const HomeContainer=styled.div`
 display:flex;
 justify-content:center;
 height:100vh; 
`
const TextContainer=styled.div`
  width: 900px;
  height: 30%;
  margin: 2em;
  padding: 2em;
  text-align:justify;
  border:solid 2px;
  background-color: rgba(0,0,0,0.5);
  p{
    color:white;
  }
`
function HomePage() {
  return (
  <div>
    <Header/>
    < HomeContainer>
      <TextContainer>
        <p> lalalalalalal</p>
        <p>   Cras neque diam, fringilla at libero nec, ultricies eleifend ipsum. Curabitur pellentesque, dui sit amet sodales vehicula, dui turpis vulputate ligula, nec varius nisl erat vel sapien. Etiam rutrum velit nunc, ut ullamcorper lectus tincidunt ac. Aliquam imperdiet convallis ex, at posuere sapien suscipit consequat. Nulla facilisi. Nullam id lacus feugiat elit rutrum aliquam et vitae lacus. Sed scelerisque pharetra nunc, quis faucibus mauris. In accumsan elit a dui consequat, in tempus neque finibus. Pellentesque bibendum, erat et pulvinar scelerisque, enim quam accumsan dui, et varius lorem nisi ut eros. Fusce molestie, velit quis facilisis mollis, ipsum ligula eleifend dolor, et suscipit erat orci tempor justo.</p>
      </TextContainer>
    </HomeContainer>
  </div> 
  );
}
export default HomePage;

