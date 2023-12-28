import { BtnWatchMovies, BtnWatchTrailer } from "./styles"

// eslint-disable-next-line react/prop-types
function Button({ children, red, ...rest }) {
    return (
        <>
            {red ? (<BtnWatchMovies {...rest}>{children}</BtnWatchMovies>) : 
            (<BtnWatchTrailer {...rest}>{children}</BtnWatchTrailer>)}
        </>

    )

}

export default Button