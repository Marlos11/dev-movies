import styled from 'styled-components'

export const Conteiner = styled.div`

display: flex;
justify-content: space-between;
 position: fixed;
top: 0; 
z-index: 1;


img{
    width: 25%;
    padding: 25px;
}

`

export const Menu = styled.ul`

display: flex;
gap: 30px;
padding: 20px;



`

export const Li = styled.li`

font-size: 28px;
    font-weight: 700;
    cursor: pointer;
    list-style: none;

    a{
    color:#ffff ;

    

}

`