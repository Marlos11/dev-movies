import styled, { css } from 'styled-components'

const buttonStyles = css`
 border: 3px solid #fff;
    border-radius: 30px;
    background-color: transparent;
    color: #fff;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;

    &:hover{
        background-color:#fff ;
        color: #ff0000;
    }

`
export const BtnWatchMovies = styled.button`
    ${buttonStyles}

    background-color: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 /30%);
    &:hover{
        background-color: #ff0000;
        color: white;
        box-shadow: 0px 0px 7px 8px rgb(255 0 0 /50%);
        

    }
`
export const BtnWatchTrailer = styled.button`
    ${buttonStyles}

  
`

