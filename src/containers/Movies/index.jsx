import { useState, useEffect } from "react"

import { Container, Background, Info, Poster } from "./styles"

import { getImage } from "../../utils/getImage"
import Button from "../../components/Button"
import { ConteinerButtons } from "../Home/styles"
import { getMovies, getTopMovie } from "../../server/getData"
import Slider from "../../components/Slider"








function Movies() {

    const [movies, setMovies] = useState()
    const [topMovies, setTopMovies] = useState()

    console.log(movies)

    useEffect(() => {

        async function getAllData() {
            setMovies(await getMovies())
            setTopMovies(await getTopMovie())

        }

        getAllData()

        /*  async function getFilmes() {
             const { data: { results } } = await api.get('/movie/popular')
             setMovies(results[1])
         }
         getFilmes() */
    }, [])
    return (


        <>
            ({movies &&

                <Background img={getImage(movies.backdrop_path)}>
                    <Container>
                        <Info>

                            <h1>{movies.title}</h1>
                            <p>{movies.overview}</p>
                            <ConteinerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhes/${movies.id}`)}>
                                    Assita Agora </Button>
                                <Button red={false} onClick={() => navigate(`/detalhes/${movies.id}`)}>
                                    Assistir ao trailer </Button>
                            </ConteinerButtons>
                        </Info>


                        <Poster>
                            <img src={getImage(movies.poster_path)} alt="capa-filme" />
                        </Poster>
                    </Container>
                </Background>





            })
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
        </>
    )
}

export default Movies