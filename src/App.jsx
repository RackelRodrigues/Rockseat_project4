import './App.css'
import  BackgroundImg from './Images/background.png'
import styled from 'styled-components';
import Header from './components/Header/Header';
import Main1 from './components/Main1/Main1';
import Main2 from './components/Main2/Main2'

const Background = styled.div`
background-image: url(${BackgroundImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 100vw;
height: 110vh;
`;

const Main_1 = styled.div`
padding-top: 150px;
`;


function App() {
  

  return (
    <>
     <Background>
      <Header/>
     <Main_1>
      <Main1/>
      </Main_1>
     </Background>
     <Main2>

    </Main2>

    </>
  )
}

export default App
