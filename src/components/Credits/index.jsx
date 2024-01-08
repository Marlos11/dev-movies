/* eslint-disable react/prop-types */
import { getImage } from "../../utils/getImage";
import { Container, Title } from "./styles";

function Credits({ credit }) {
    console.log(credit)

    return (

        <>
            <Title>Creditos</Title>
            {credit && (

                <Container>
                    {credit.slice(0, 5).map((artist) => (
                        <div key={artist.id}>
                            <img src={getImage(artist.profile_path)} />
                            <p>{artist.original_name}</p>


                        </div>
                    ))}

                </Container> 

                
            )}
        </>
    )
}

export default Credits