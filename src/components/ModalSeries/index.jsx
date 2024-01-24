import { useEffect, useState } from "react"
import { Background, Container } from "./styles"

import { getSeriesVideos } from "../../server/getData"



// eslint-disable-next-line react/prop-types
function ModalSerie({ serieVideoId, setShowModal }) {

    const [serie, setSerie] = useState()

    useEffect(() => {
        async function getSeries() {


            setSerie(await getSeriesVideos(serieVideoId))


        }

        getSeries()

    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            {serie && (


                <Container >
                    <iframe
                        src={`http://www.youtube.com/embed/${serie[0].key}`}
                        title="YouTube Video Player "
                        height={'500px'}
                        width={"100%"}
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default ModalSerie