import React, {useEffect, useState} from "react"
import "./Movie.css"
import { useParams,Link } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`${currentMovieDetail ? currentMovieDetail.image.original : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`${currentMovieDetail ? currentMovieDetail.image.original : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{currentMovieDetail ? currentMovieDetail.name : ""}</div>
                       
                        <div className="movie__rating">
                            {currentMovieDetail ? currentMovieDetail.rating.average: ""} <i class="fas fa-star" />
                           
                        </div>  
                        <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{currentMovieDetail ? "Release date: " + currentMovieDetail.premiered : ""}</div>
                        {/* <div className="movie__genres">
                            {
                                currentMovieDetail && currentMovieDetail.genres
                                ? 
                                currentMovieDetail.genres.map(genre => (
                                    <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                )) 
                                : 
                                ""
                            }
                        </div> */}
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Summary</div>
                        <div>{currentMovieDetail ? currentMovieDetail.summary : ""}</div>
                    </div>
                    
                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading"></div>
                {
                    currentMovieDetail && currentMovieDetail.url && <a href={currentMovieDetail.url} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Official site <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                    
                }
                <div> 
                <a href={`/shows/${id}/images`} style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Book Tickets <i className="newTab fas fa-external-link-alt"></i></span></p></a> 
                </div>
            </div>
           
        </div>
    )
}

export default Movie