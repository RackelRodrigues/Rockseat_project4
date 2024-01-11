import styled from "styled-components";
import Logo from '../../Images/logo.svg';
import LogoMeta from "../../Images/logo_MetaMask.svg"


const RockeatLogo =  styled.img`
width: 200px;
margin-left: 95px
`;


const Logo_MetaMask = styled.img`
width: 30px;
display: flex;
align-items: center;
margin: 0 20px 0 20px;
`;


const Links = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
margin-right: 60px;
cursor: pointer;
transition: transform 0.2s ease-in-out, border 0.2s ease-in-out; 

&:hover {
  transform: scale(1.02); 
  border-bottom: 2px solid white;
}
`;

const ConteinerLinks = styled.div`
display: flex;

`;

const Button = styled.button`
width: 230px;
height: 50px;
background-color: #fff;
color: #000;
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 700;
border-radius: 5px;
display: flex;
align-items: center;
border: none;
margin-right: 110px;
&:hover{
  outline: none;
  background-color: #f5f5f5;
  cursor: pointer;
 }

 

`;

const Conteiner = styled.div`
width: 100%;
height: 100px;
background-color: transparent;
position: absolute;
top: 0; 
background-color: transparent;
display: flex;
justify-content: space-between;
align-items: center;


`;
const Header = ()=>{
    return <>
    <Conteiner>
       <RockeatLogo src={Logo} alt="Logo"/>

        <ConteinerLinks>
          <Links>Comprar NFT</Links>
          <Links>Sobre</Links>
          <Links>FAQ</Links>
        </ConteinerLinks>

        <Button>
            <Logo_MetaMask src={LogoMeta} alt="raposa"/>
            Conectar carteira
            </Button>
    </Conteiner>    
    
    </>
}

export default Header;