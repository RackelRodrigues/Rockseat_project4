import styled from "styled-components";
import Badge from "../../Images/badge.svg";
import Groupavarts from "../../Images/group-avarts.png"
import Galeria1  from "../../Images/galeria-1.png"
import Galeria2  from "../../Images/galeria-2.png"
import Galeria3 from "../../Images/galeria-3.png"
import Galeria4  from "../../Images/galeria-4.png"
import Galeria5  from "../../Images/galeria-5.png"
import Galeria6  from "../../Images/galeria-6.png"
import Galeria7  from "../../Images/galeria-7.png"
import Galeria8  from "../../Images/galeria-8.png"




const Images = styled.img`
width: 320px;
height: 198px;
transition: transform 0.2s ease-in-out; 
&:hover {
    transform: scale(1.05); 
}
`;

const P = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
width: 401px;

`;

const ConteinerP = styled.div``;

const BoxMain = styled.div`
display: flex;
margin-top: 30px;
`;

const ConteinerH1 = styled.div``;

const H1 = styled.h1` 
color: #FFF;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;

`;

const H1Red = styled.h1`
color: #FF5B50;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;

`;

const LogoSvg = styled.img`
width: 180px;
height: 180px;

`;

const Group = styled.img`
width: 100px;
margin-right: 20px;
`;

const Subtitulo = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 700;
position: relative;
top: 20px;
`;

const Subtitulo2 = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
position: relative;
top: 40px;
right: 20px;
`;

const ConteinerAll = styled.div`
display: flex;
justify-content: space-around;
align-items: center;

`;

const BoxPictures = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 50px;
grid-column-gap: 50px;
margin-top: 100px;

`;

const Aligncenter = styled.div`
display: flex;
justify-content: center;
justify-content: center;

`;

const Main1 =()=>{
    
    return(
    <>
    <ConteinerAll>
    <ConteinerP>
    <P>Mercado digital para colecionáveis em criptos e tokens não fungível(NFT). 
     Compre, venda e descubra ativos digitais exclusivos para você.</P>
    
    <BoxMain>
    <Group src={Groupavarts} alt="Grupo de avarts"/>
    <Subtitulo>+10</Subtitulo>
    <Subtitulo2>Artistas selecionados</Subtitulo2>
    </BoxMain>
    </ConteinerP>

   <ConteinerH1>
    <H1>Descubra a verdadeira </H1>
    <H1>arte digital e</H1>
    <H1>colecione diversas</H1>
    <H1Red>NFTs</H1Red>
    </ConteinerH1>

    <LogoSvg src={Badge} alt="Logo Explorer"/>
    </ConteinerAll>

    <Aligncenter>
    <BoxPictures>
   <Images src={Galeria1} alt="galeria1"/>
   <Images src={Galeria2} alt="galeria2"/>
   <Images src={Galeria3} alt="galeria3"/>
   <Images src={Galeria4} alt="galeria4"/>
   <Images src={Galeria5} alt="galeria5"/> 
   <Images src={Galeria6} alt="galeria6"/>
   <Images src={Galeria7} alt="galeria7"/>
   <Images src={Galeria8} alt="galeria8"/>
   </BoxPictures>
   </Aligncenter>
    </>
    
    )
}


export default Main1;