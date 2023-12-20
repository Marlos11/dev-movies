/* eslint-disable react/prop-types */
import { getImage } from "../../utils/getImage"
import { Conteiner } from './styles'

function Card({ item }) {
    return (
        <Conteiner>
            <img src={getImage(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.name || ''}</h3>
        </Conteiner>
    )
}

export default Card