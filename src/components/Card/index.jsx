/* eslint-disable react/prop-types */
import { getImage } from "../../utils/getImage"
import { Conteiner } from './styles'

function Card({ item }) {
    return (
        <Conteiner>
            <img src={getImage(item.poster_path)} />
            <h3>{item.original_title}</h3>
        </Conteiner>
    )
}

export default Card