import styled,{keyframes}from "styled-components";

const scale = keyframes`

    from{
        transform: scale(0);

    }

    to{
        transform: scale(1);
    }

`

export const Conteiner = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
height: 100%;
max-width: 1500px;
margin: -100px;


`

export const Background = styled.div`

background-image: url(${(props) => props.image});
height: 50vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;


&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);

    &::after{
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top #0f0f0f,rgba(0,0,0,0));
    }

}
`
export  const Cover = styled.div`
padding: 20px;
display: flex;
align-items: flex-start;
height: 100%;
z-index: 1;

img{
    width: 500px;
    border-radius: 30px;
 
     box-shadow: rgb(100 100 111 / 150%) 0px 7px 29px 0px ;

     animation: ${scale} 0.5s linear;
}
`
