import styled from "styled-components";
import Banner from "../../Images/banner.png"


const Background = styled.div`
background-color: #000;
display: flex;
width: 100%;
padding-top: 40px;
`;

const Titulo = styled.h1`
color: #FFF;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 600;
line-height: normal;


`;

const Subtitulo = styled.p`
color: #5A5757;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 600;
text-align: center;
`;

const  Explain = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 435px;
height: 114px;

`;

const ExplainOrange = styled.span`
color: #FF5B50;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
`;


const ExplainUnderlined = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-decoration-line: underline;
padding-top: 10px;

`;


const BannerImg = styled.img`
width: 1300px;
height: 300px;


`;

const ConteinerBanner = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;

`;

const BoxText = styled.div`
display: flex;
flex-direction: column;
margin: 50px 0 50px 0;
`;

const Divider = styled.span`

&::after{
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #5A5757;
   
 
}
`;

const SideDivider = styled.span`
position: relative;
bottom: 15px;


&::after{
    content: '';
    position: absolute;
    height: 561px;
    width: 1px;
    background-color: #5A5757;
   
 
}

`;


const Data = styled.div`
display: grid;
grid-template-areas: 'BoxNumers   Boxinformation Boxinformation';
background-color: #000;
`;

const BoxData = styled.div`
width: 300px;
height: 400px;
background-color: #000;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 80px;



`;

const BoxNumers = styled.div`
grid-area: BoxNumers;
margin-bottom: 50px;

`;

const Boxinformation = styled.div`
grid-area: Boxinformation;
width: 100%;
padding-left: 44px;
`;

const Boxinformation2 = styled.div`
display: flex;
justify-content: space-between;
padding-left: 44px;


`;

const Main2 =()=>{
    return(
        <>
        <Background>
            <Data>
            <BoxData>
            <BoxNumers>
            <Titulo>10K+</Titulo>
            <Subtitulo>Artes</Subtitulo>
            </BoxNumers>

            <BoxNumers>
            <Titulo>200+</Titulo>
            <Subtitulo>vendas</Subtitulo>
            </BoxNumers>

            <BoxNumers>
            <Titulo>20</Titulo>
            <Subtitulo>Artistas</Subtitulo>
        
            </BoxNumers>
           
            </BoxData>
            
          
             <Boxinformation>
             <SideDivider/>
                <Boxinformation2>
                <BoxText>
             <Explain>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Congue malesuada amet pretium lacus. 
                Id <ExplainOrange>potenti diam</ExplainOrange>et cras odio viverra.
                 Amet, velit ut hac sit. 
                 Enim ultricies mauris mattis nunc semper.
                </Explain>
              <ExplainUnderlined>Lorem ipsum</ExplainUnderlined>
              </BoxText>

              <BoxText>
             <Explain>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Congue malesuada amet pretium lacus. 
                Id <ExplainOrange>potenti diam</ExplainOrange>et cras odio viverra. 
                Amet, velit ut hac sit. 
                Enim ultricies mauris mattis nunc semper.
                </Explain>
             <ExplainUnderlined>Lorem ipsum</ExplainUnderlined>
             </BoxText>
             </Boxinformation2>
             <ConteinerBanner>
            <BannerImg src={Banner} alt="Banner cantor"/>
            </ConteinerBanner>
            </Boxinformation>
           </Data>
        </Background>
        <Divider/>
        </>
    )
}


export default Main2;