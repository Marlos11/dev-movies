import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);

    }

`
export const Conteiner = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1440px;

`
export const Info = styled.div`

z-index: 2;
padding: 1.25px;
width: 50%;

h1{
    font-size: 2.8;
    font-weight: 700;
    color: #ffffff;
}

p{
    font-size: 1.25;
    font-weight: 500;
    color: #ffffff;
    margin-top: 30px;
    margin-bottom:20px ;
}

`

export const Poster = styled.div`
   
   z-index: 2;
    img{
        width:250px;
        border-radius: 30px;
    }

`

export const ConteinerButtons = styled.div`
    display: flex;
    gap:30px;
    padding-top: 30px;
`