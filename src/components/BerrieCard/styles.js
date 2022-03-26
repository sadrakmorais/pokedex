import styled from 'styled-components';
import BG from '../../assets/background-pokemon-card.jpg'

export const Wrapper = styled.div`
display:flex ;
align-items:    center ;
justify-content:space-between;
width: 80%;
height: 300px ;
background-image: url(${BG}) ;
background-size:cover ;
background-repeat:no-repeat ;
background-position:center ;
border:8px solid #C7CCCF ;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
padding:1rem ;

`;

export const Infos = styled.div`
  width:70% ;
  background:rgba(255,255,255,.8) ;
  height:100% ;
  display:flex ;
  justify-content:center ;
  align-items:center ;
  border-radius:8px ;
`

export const Name = styled.div`
width:100% ;

`;

export const Avatar = styled.div`
width:100% ;
max-width:250px ;
background:rgba(255,255,255,.8) ;
height:100% ;
display:flex ;
justify-content:center ;
align-items:center ;
border-radius:8px ;

img{
    width:100% ;
}
`;

export const Weight = styled.div`
width:100% ;

`;
