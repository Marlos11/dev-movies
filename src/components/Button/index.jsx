import { BtnWatchMovies, BtnWatchTrailer } from "./styles"

// eslint-disable-next-line react/prop-types
function Button({ children, red }) {
    return (
        <>
            {red ? (<BtnWatchMovies>{children}</BtnWatchMovies>) : (<BtnWatchTrailer>{children}</BtnWatchTrailer>)}
        </>

    )

}

export default Button