import styled, { keyframes } from "styled-components";

const scale = keyframes`

from{
    transform: scale(0);
}

to{
    transform: scale(1);
}
`
export const Container = styled.div`

display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1440px;

`
export const Background = styled.div`

background-image: url(${(props) => props.img});
background-position: center;
background-size:cover;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
  


&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);

    
}
`


export const Info = styled.div`
z-index:2;
width: 50%;
padding: 1.25rem;
margin-right: 14rem;
h1{
    font-size:5rem;
    color:#ffffff;
    font-weight:700;
}
    
    p{
        font-size:1.25rem;
        font-weight: 500;
        color: #ffffff;
        margin-top: 30px;
    margin-bottom:20px ;
    }


`

export const Poster = styled.div`

z-index:2;
img{
    width:250px;
    border-radius:40px;

    animation: ${scale} 0.5s linear;
}



`
export const ConteinerButtons = styled.div`
    display: flex;
    gap:30px;
    padding-top: 30px;
`
