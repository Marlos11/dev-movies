import { useEffect, useState } from "react"
import { Background, Container } from "./styles"

import { getSerieVideos } from "../../server/getData"






// eslint-disable-next-line react/prop-types
function Modalserie({ setShowModal,serieId }) {
    const [serie, setSerie] = useState()
    useEffect(() => {
        async function getMovies() {


            setSerie(await getSerieVideos(serieId))



        }

        getMovies()

    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>

            {serie && (


                <Container >
                    <iframe
                        src={`https://www.youtube.com/embed/${serie.key}`}

                        title="YouTube Video Player "
                        height={'500px'}
                        width={"100%"}
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modalserie 
