import { useState, useEffect } from "react"
import { getSeries, getTopSeries } from "../../server/getData"
import { Background, Container, Poster, Info, ConteinerButtons } from "./styles"
import Button from "../../components/Button"
import { getImage } from "../../utils/getImage"
import Slider from "../../components/Slider"
<<<<<<< HEAD
import Modalserie from "../../components/ModalSeries"
=======
import ModalSerie from "../../components/ModalSeries"
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
/* import { Navigate } from "react-router-dom"
 */
/* 
const navigate = Navigate() */



function Series() {

    const [serie, setSerie] = useState()
    console.log(serie)
    const [topSerie, setTopSerie] = useState()
<<<<<<< HEAD
    const [modalShow,SetShowModal] = useState(false)
=======
    const [showModal,setShowModal] = useState(false)
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b


    useEffect(() => {

        async function getAllData() {
            Promise.all([
                getSeries(),
                getTopSeries()
            ])
                .then(([series, topSeries]) => {
                    setSerie(series)
                    setTopSerie(topSeries)
                })


                .catch((error => (error)))
        }
        getAllData()
    }, [])






    return (
        <>
            {serie && (
                <Background img={getImage(serie.backdrop_path)}>
<<<<<<< HEAD
                  {modalShow  &&  < Modalserie serieId={serie.id} setShowModal={SetShowModal}/>}
=======
                      {showModal && <ModalSerie serieVideoId={serie.id} setShowModal={setShowModal} />}
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
                    <Container>
                        <Info>
                            <h1>{serie.name}</h1>
                            <p>{serie.overview}</p>
                            <ConteinerButtons>
<<<<<<< HEAD
                                <Button red={true} onClick={() => navigate(`/detalhes/${serie.id}`)}>
                                    Assita Agora </Button>
                                <Button red={false} onClick={() =>SetShowModal(true)}>
=======
                                <Button red={true} onClick={() => (`/detalhes/${serie.id}`)}>
>>>>>>> e62f67835313ff665d2e82a1a619b488269a766b
                                    Assita Agora </Button>
                                <Button red={false} onClick={() => setShowModal(true)}>
                                   Assita ao trailer </Button>
                            </ConteinerButtons>
                        </Info>
                        <Poster>
                            <img src={getImage(serie.poster_path)} alt="capa do filme" />
                        </Poster>

                    </Container>
                </Background>

            )}
            {topSerie && <Slider info={topSerie} title={'Top Séries'} />}
        </>


    )
}

export default Series