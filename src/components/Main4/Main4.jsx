import styled from "styled-components";
import Artista1 from "../../Images/artista-1.png";
import Artista2 from "../../Images/artista-2.png";
import Artista3 from "../../Images/artista-3.png";
import Artista4 from "../../Images/artista-4.png";
import Artista5 from "../../Images/artista-5.png";
import Artista6 from "../../Images/artista-6.png";
import { FaArrowUp } from "react-icons/fa6";

const Titulo = styled.h2`
color: #FFF;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;
margin-bottom: 80px;
`;

const Span = styled.span`
color: #FF5B50;
font-family: Montserrat;
font-size: 50px;
font-style: normal;
font-weight: 700;
`;

const Background = styled.div`
background-color: #000;
padding-top: 100px;
display: flex;
flex-direction: column;
align-items: center;
`;

const BoxArtistOrange = styled.div`
width: 350px;
height: 150px;
background-color: #FF5B50;
display: flex;
align-items: center;
&:hover {
    background-color: #252525; 
    
    p {
      color: #FF5B50; 
    }
  }
`;

const BoxArtistBlack = styled.div`
width: 350px;
height: 150px;
background-color: #252525;
display: flex;
align-items: center;
&:hover {
    background-color: #FF5B50; 
    cursor: pointer;
    
    p {
      color: #FFF; 
    }
  }
`;

const ArtistNames = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
margin-left: 50px;

`;


const ArtistPictures = styled.p`
color: #FF5B50;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
margin-left: 50px;
cursor: pointer;

`;

const ArtistPictureswhite = styled.p`
color: #FFF;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 500;
margin-left: 50px;
&:hover {
    color: #FF5B50;
    cursor: pointer;
  }
`;

const ImgArtist = styled.img`
width: 100px;
height: 100px;
margin-left: 15px;
`;

const StyledArrowside = styled(FaArrowUp)`
  transform: rotate(32.02deg);
  color: #FF5B50;
  &:hover {
    cursor: pointer;
    
  }
`;

const BoxValues = styled.div`
/*aqui é display block originalmente*/

`;

const BoxArtistarrow = styled.div`
width: 240px;
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 156px;
`;

const Conteinergrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 80px;
margin: 50px 0 50px 0;
`;


const Main4 = ()=>{
    return(
        <>
        <Background>
        <Titulo>Melhores <Span>artistas</Span></Titulo>
      

        <Conteinergrid>
        <BoxArtistBlack>
            <ImgArtist src={Artista1}/>
            <BoxValues>
            <ArtistNames>Luna Starlight</ArtistNames>
            <ArtistPictures>99 Fotografias</ArtistPictures>
            </BoxValues>
        </BoxArtistBlack>

        <BoxArtistOrange>
            <ImgArtist src={Artista2}/>
            <BoxValues>
            <ArtistNames>Rackel Rodrigues</ArtistNames>
            <ArtistPictureswhite>50 Fotografias</ArtistPictureswhite>
            </BoxValues>
        </BoxArtistOrange>
        <BoxArtistBlack>
            <ImgArtist src={Artista3}/>
            <BoxValues>
            <ArtistNames>Phoenix Blaze</ArtistNames>
            <ArtistPictures>50 fotografias</ArtistPictures>
            </BoxValues>
        </BoxArtistBlack>

        <BoxArtistBlack>
            <ImgArtist src={Artista4}/>
            <BoxValues>
            <ArtistNames>Scarlett Velvet</ArtistNames>
            <ArtistPictures>28 Fotografias</ArtistPictures>
            </BoxValues>
        </BoxArtistBlack>
        <BoxArtistBlack>
            <ImgArtist src={Artista5}/>
            <BoxValues>
            <ArtistNames>Seraphina Moonrise</ArtistNames>
            <ArtistPictures>20 fotografias</ArtistPictures>
            </BoxValues>
        </BoxArtistBlack>
        <BoxArtistBlack>
            <ImgArtist src={Artista6}/>
            <BoxValues>
            <ArtistNames>Dashiell Phoenix</ArtistNames>
            <ArtistPictures>20 fotografias</ArtistPictures>
            </BoxValues>
        </BoxArtistBlack>
        </Conteinergrid>
        <BoxArtistarrow>
        <ArtistPictureswhite>Ver todos os artistas</ArtistPictureswhite>
        <StyledArrowside size={15}/>
        </BoxArtistarrow>
        </Background>
        
        </>
    )
}

export default Main4;