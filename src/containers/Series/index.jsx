import { useState, useEffect } from "react"
import api from "../../server/api"
import { Background, Container, Poster, Info, ConteinerButtons } from "./styles"
import Button from "../../components/Button"
import { getImage } from "../../utils/getImage"
/* import { Navigate } from "react-router-dom"
 */
/* 
const navigate = Navigate() */



function Series() {

    const [serie, setSerie] = useState()


    useEffect(() => {

        async function getSerie() {
            const { data: { results } } = await api.get('/tv/top_rated')


            setSerie(results[5])

            /*   */
        }
        getSerie()
    }, [])






    return (
        <>
            {serie && (
                <Container>
                    <Background img={getImage(serie.backdrop_path)}>
                        <Info>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>
                            <ConteinerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhes/${serie.id}`)}>
                                    Assita Agora </Button>
                                <Button red={false} onClick={() => navigate(`/detalhes/${serie.id}`)}>
                                    Assita Agora </Button>
                            </ConteinerButtons>
                        </Info>
                        <Poster>
                            <img src={getImage(serie.poster_path)} alt="capa do filme" />
                        </Poster>

                    </Background>
                </Container>

            )}
        </>


    )
}

export default Series