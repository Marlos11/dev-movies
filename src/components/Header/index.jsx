import { Menu, Conteiner , Li } from "./styles";
import Logo from '../../assets/logo.png'
import { Link,  useLocation  } from "react-router-dom";
import { useState } from "react"; 





function Header() {
   const [changeBackGround, setChangeBackGround] = useState(false)
    const { pathname } = useLocation() 

    window.onscroll = () => {
       if(! changeBackGround && window.pageYOffset>150){
        setChangeBackGround(true)
       }

       if(changeBackGround && window.pageYOffset <=150){
        setChangeBackGround(false)
       }
    }
    return (

        <Conteiner background={changeBackGround}>

            <Link to="/" >
                {<img src={Logo} alt="" />}

            </Link>
            <Menu>
                <Li active={pathname === '/'}>
                    <Link to="/"> Home</Link>
                </Li>
                <Li active={pathname.includes('series')}>
                    <Link to="/series">Séries</Link>
                </Li>
                <Li active={pathname.includes('movies')}>
                    <Link to="/movies">Filmes</Link>
                </Li>   
            </Menu>
        </Conteiner>
    )
}

export default Header 