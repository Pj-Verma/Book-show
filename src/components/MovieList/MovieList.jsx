import React, {useEffect, useState} from "react"
import "./MovieList.css"
import Cards from "../Card/Card"

const MovieList = () => {
    const [movieList, setmovieList] = useState([])
    useEffect(() => {
      fetch("https://api.tvmaze.com/shows")
      .then(res=>res.json())
        // .then(data=>console.log(data))
      .then(data=>setmovieList(data))
    }, [])

    return (
        <div className="movie__list">
            <h2 className="list__title">{("Shows").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.slice(0,49).map(show => (
                        <Cards show={show} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList