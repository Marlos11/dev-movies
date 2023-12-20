 import { Menu, Conteiner, Li } from "./styles";
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
 


function Header() {
    return(

    <Conteiner>
      {  <img src={Logo} alt="" /> }
        <Menu>
            <Li>
                <Link to="/"> Home</Link>
            </Li>
            <Li>
                <Link to="/series">Séries</Link>
            </Li>
            <Li>
                <Link to="/movies">Filmes</Link>
            </Li>
        </Menu>
    </Conteiner>
    )
}

export default Header 