import styled from 'styled-components'

export const Conteiner = styled.div`

display: flex;
justify-content: space-between;
 position: fixed;
top: 0; 
z-index: 1;
background-color: ${props => props.background ? '#000' : 'transparent'};
transition: background-color 0.5s ease-in-out;



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
    position:relative;

   
    a{
    color:#ffff ;
    text-decoration:none;



       
}

 &::after{
            content: '';
            height:3px;
            width: ${(props) => (props.isActive ? '100%' : '0')};
            background-color: #189b20;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px ;
            transition: width 0.5s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
    

`