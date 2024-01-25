import { useEffect, useState } from "react"
import { Background, Container } from "./styles"

<<<<<<< HEAD
import {  getSerieVideos } from "../../server/getData"
=======
import { getSeriesVideos } from "../../server/getData"
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b



// eslint-disable-next-line react/prop-types
<<<<<<< HEAD
function Modalserie({ serieId,setShowModal }) {
console.log(serieId,`to aqui `)
    const [serie, setSerie] = useState()
    useEffect(() => {
        async function getMovies() {
            

            setSerie(await getSerieVideos(serieId))
=======
function ModalSerie({ serieVideoId, setShowModal }) {

    const [serie, setSerie] = useState()

    useEffect(() => {
        async function getSeries() {


            setSerie(await getSeriesVideos(serieVideoId))
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b


        }

<<<<<<< HEAD
        getMovies()

    },[])

    return (
        <Background onClick={()=>setShowModal(false)}>
=======
        getSeries()

    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
            {serie && (


                <Container >
                    <iframe
<<<<<<< HEAD
                        src={`http://www.youtube.com/embed/${serie.key}`}
=======
                        src={`http://www.youtube.com/embed/${serie[0].key}`}
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
                        title="YouTube Video Player "
                        height={'500px'}
                        width={"100%"}
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

<<<<<<< HEAD
export default Modalserie 
=======
export default ModalSerie
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
