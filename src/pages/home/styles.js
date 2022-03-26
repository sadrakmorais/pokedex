import styled from 'styled-components';

export const Wrapper = styled.section`
display:flex ;
height:100vh ;
width:100% ;
align-items:center ;
justify-content:center ;
flex-direction:column ;
background:#D50A2C ;
`;

export const Form = styled.form`
display:flex ;
width:50% ;
justify-content:space-between ;
margin-top:3rem ;

input{
    width:100% ;
    height:3rem ;
    border:none ;

}

button{
    height:3rem ;
    border:none ;

}
`
export const Loading = styled.div`
display:flex ;
align-items:center ;
justify-content:center ;
flex-direction:column ;
width: 80%;
height: 300px ;
background:cyan ;
border:8px solid #C7CCCF ;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`
