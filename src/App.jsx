import './App.css'
import  BackgroundImg from './Images/background.png'
import styled from 'styled-components';
import Header from "./components/Header/Header";
import Main1 from "./components/Main1/Main1";
import Main2 from "./components/Main2/Main2";
import Main3 from "./components/Main3/Main3";
import Main4 from "./components/Main4/Main4";
import Footer from './components/Footer/Footer';

const Background = styled.div`
background-image: url(${BackgroundImg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
width: 98.9vw;
height: 110vh;
@media (max-width: 1000px) {
     width: auto;
     height: auto;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     }


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
     <Main2/>
     <Main3/>
     <Main4/>
     <Footer/>
    </>
  )
}

export default App

