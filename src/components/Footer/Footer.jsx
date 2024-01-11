import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md"; 
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialYoutube } from "react-icons/sl";
import { FaArrowUp } from "react-icons/fa6";
import logo from "../../Images/logo.svg";

const Background = styled.div`

`;

const LogoImg = styled.img`
width: 276px;
height: 43px;
margin-left: 84px;
`;

const Buttonarrow = styled.button`
background-color: #FF5B50;
width: 80px;
height: 80px;
border: none;
margin-right: 84px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #D24D44;
  cursor: pointer;
}

`;

const BoxInput = styled.div`
width: 280px;
height: 66px;
background-color: #0D0D0D;
display: flex;
border: none;
display: flex;
align-items: center;
justify-content: center;
`;

const Input = styled.input`
width: 100%;
height: 100%;
border: none;
background-color: #0D0D0D;
color: #5A5757;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
margin-left: 20px;
&:focus {
    outline: none; 
  }
`;

const Buttonforinput = styled.button`
width: 122px;
height: 66px;
background-color: #fff;
color: #000;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
`;

const Anuncio = styled.h3`
color: #FFF;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 500;
width: 300px;
height: 80px;
`;

const Span = styled.span`
color: #FF5B50;
font-family: Montserrat;
font-size: 30px;
font-style: normal;
font-weight: 500;
`;

const H4 = styled.h4`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
text-align: center;
margin-right: 13px;
margin-bottom: 15px;
`;

const H4Em = styled.h4`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
text-align: center;
margin-left: 11px;
margin-bottom: 15px;
`;

const P = styled.p`
color: #5A5757;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 400;
margin-left: 84px;
margin-bottom: 10px;
&:hover {
    color: #FF5B50;
    cursor: pointer;
  }

`;

const Conteiner1 = styled.div`
width: 100%;
height: 222px;
background-color: #252525;
display: flex;
justify-content: space-between;
align-items: center;

`;

const Conteiner2 = styled.div`
width: 100%;
height: 320px;
background-color: #252525;
display: flex;
justify-content: space-between;
align-items: center;

`;

const Conteiner3 = styled.div`
background-color: #252525;
width: 100%;
height: 167px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const BoxIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-right: 84px;

`;



const ConteinerSabermais = styled.div`
display: block;

`;

const BoxGridfooter = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: flex-end;
width: 700px;
margin: 0 auto;

`;



const CustomInstagram = styled(FaInstagram)`
  font-size: 30px;
  color: #5A5757;
  transition: color 0.3s ease;
  margin-right: 50px;
  &:hover {
    color: #FF5B50;
    cursor: pointer;
  }
`;

const CustomYoutube = styled(SlSocialYoutube)`
  font-size: 30px;
  color: #5A5757;
  transition: color 0.3s ease;
  margin-right: 50px;
  &:hover {
    color: #FF5B50;
    cursor: pointer;
  }
`;

const CustomTwitter = styled(FiTwitter)`
  font-size: 30px;
  color: #5A5757;
  transition: color 0.3s ease;
  margin-right: 50px;
  &:hover {
    color: #FF5B50;
    cursor: pointer;
  }
`; 


const CustomMail = styled(MdOutlineMail)`
 font-size: 30px;
  color: #5A5757;
  transition: color 0.3s ease;
  margin-right: 50px;
  &:hover {
    color: #FF5B50;
    cursor: pointer;
  }


`;

const Divider = styled.span`

&::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: #5A5757;
   
 
}
`;



const SideDivider = styled.span`
position: relative;
left: 80px;
bottom: 200px;
&::after{
    content: '';
    position: absolute;
    width: 1px;
    height: 320px;
    background-color: #5A5757;
   
 
}
`;

const Part1 = styled.div`
margin-left: 84px;

`;


const Footer = () =>{
    return(
    <>
    <Background>
<Conteiner1>
    <LogoImg src={logo} alt="Logo rocketNfts"/>
    <Buttonarrow>
        <FaArrowUp size={22}color="#000"/>
    </Buttonarrow>
</Conteiner1>
<Divider/>
<Conteiner2>
    <Part1>
<Anuncio>Fique por dentro de <Span>todas as novidades</Span></Anuncio>

<BoxInput>
<Input placeholder="nft@rocketseat.com.br"/>
<Buttonforinput>Enviar</Buttonforinput>
<SideDivider/>
</BoxInput>

</Part1>

<BoxGridfooter>
<ConteinerSabermais>

<H4Em>Empresa</H4Em>
    <P>Sobre</P>
    <P>Serviços</P>
    <P>Time</P>
    <P>Carreira</P>
    </ConteinerSabermais>

    <ConteinerSabermais>
<H4>Mapa</H4>
    <P>Galeria</P>
    <P>Popularea</P>
    <P>Vendas</P>
    <P>Contato</P>
    </ConteinerSabermais>

    <ConteinerSabermais>
<H4>Links</H4>
    <P>FAQs</P>
    <P>Termos</P>
    <P>Politica</P>
    <P>Ajuda</P>

    </ConteinerSabermais>

    </BoxGridfooter>
</Conteiner2>
<Divider/>
<Conteiner3>
<P>www.rocketseat.com.br</P>
<BoxIcons>
  <CustomInstagram />
  <CustomYoutube />
  <CustomTwitter />
  <CustomMail />
</BoxIcons>
</Conteiner3>
    </Background>
    </>
    )
}

export default Footer;