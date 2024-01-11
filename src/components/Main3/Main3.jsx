import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa6";
import Astrounauta1 from "../../Images/astronauta 1.png"
import Astrounauta2 from "../../Images/astronauta-2.png"
import Astrounauta3 from "../../Images/astronauta-3.png"
import Astrounauta4 from "../../Images/astronauta-4.png"




const Background = styled.div`
background-color: #000;

`;

const Titulo = styled.h2`
color: #FFF;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;
padding: 100px 0 100px 160px;
`;
const Span = styled.span`
color: #FF5B50;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;
`;

const Astrounauta = styled.h3`
color: #FFF;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 500;
`;

const Names = styled.p`
color: #5A5757;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;

`;

const Value = styled.p`
color: #FF5B50;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
margin-right: 35px;

`;

const Divisor = styled.span`
position: absolute;
left: 850px;
margin-top: 30px;
&::after{
    content: '';
    position: absolute;
    height: 670px;
    width: 1px;
    background-color: #5A5757;
   
 
}
`;


const Img = styled.img`
width: 350px;
height: 200px;
cursor: pointer;
`;

const ConteinerAstronauta = styled.div`
width: 378px;
height: 337px;

`;

const StyledArrowUp = styled(FaArrowUp)`
  transform: rotate(32.02deg);
  color: #fff;
  margin-right: 30px;
  transition: transform 0.3s ease; 
  &:hover {
    cursor: pointer;
    transform: scale(1.2) rotate(32.02deg); 
  }
`;

const ConteinerArrow = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0 10px 0;
`;


const ConteinerNames = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 0 20px 0;
`;

const BoxSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Section = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
margin: 0 auto;
gap: 40px;
grid-column-gap: 600px;

`;

const Main3 =()=>{
    return(
        <>
        <Background>
        <Titulo><Span>Populares</Span> da semana</Titulo>
            <BoxSection>
            <Section>
        <ConteinerAstronauta>
            <ConteinerArrow>
            <Astrounauta>Astronauta 1</Astrounauta>
            <StyledArrowUp size={25}/>
            </ConteinerArrow>
        
            <ConteinerNames>
            <Names>Rackel Rodrigues</Names>
            <Value>1.50 RKT</Value>
            </ConteinerNames>
            <Img src={Astrounauta1}/>
        </ConteinerAstronauta>
        <Divisor/>
        <ConteinerAstronauta>
            <ConteinerArrow>
            <Astrounauta>Astronauta 2</Astrounauta>
            <StyledArrowUp size={25} />
            </ConteinerArrow>
            <ConteinerNames>
            <Names>Luna Starlight</Names>
            <Value>2.0 RKT</Value>
            </ConteinerNames>
            <Img src={Astrounauta2}/>
        </ConteinerAstronauta>


      

        <ConteinerAstronauta>
     <ConteinerArrow>
       <Astrounauta>Astronauta 3</Astrounauta>
        <StyledArrowUp size={25} />
        </ConteinerArrow>
        <ConteinerNames>
        <Names>Phoenix Blaze</Names>
        <Value>3.75 RKT</Value>
        </ConteinerNames>
        <Img src={Astrounauta3}/>
        </ConteinerAstronauta>
        
        <ConteinerAstronauta>
            <ConteinerArrow>
           <Astrounauta>Astronauta 4</Astrounauta>
            <StyledArrowUp size={25} />
            </ConteinerArrow>
            <ConteinerNames>
            <Names>Scarlett Velvet</Names>
            <Value>4.30 RKT</Value>
            </ConteinerNames>
            <Img src={Astrounauta4}/>
        </ConteinerAstronauta>
        </Section>
        </BoxSection>
        </Background>
        </>
    )
}

export default Main3;