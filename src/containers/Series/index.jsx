import { useState, useEffect } from "react"
import api from "../../server/api"
import { Background } from "./styles"
import { getImage } from "../../utils/getImage"




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

                <Background img={getImage(serie.backdrop_path)}>
                    <h1>{serie.name}</h1>
                    <p>{serie.overview}</p>

                </Background>


            )}
        </>


    )
}

export default Series