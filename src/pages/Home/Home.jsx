import React, { useEffect,useState } from 'react'
import "./Home.css"; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from '../../components/MovieList/MovieList';
const Home = () => {
    const [popularMovies, setpopularMovies] = useState([])
    useEffect(() => {
      fetch("https://api.tvmaze.com/shows")
      .then(res=>res.json())
        // .then(data=>console.log(data))
      .then(data=>setpopularMovies(data))
    }, [])
    var popularMovies1 = popularMovies.slice(0,10)
  return (
    <>
    <div className="poster">
    
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showtatus={false}
        >
            {
                popularMovies1.map(show=> (
                    
                    <Link style={{textDecoration:"none",color:"white"}} to={`/shows/${show.id}`} >

                        <div className="posterImage">
                            <img src={show?.image?.original} />
                        </div>
                        {/* <div className="posterImage__overlay">
                            <div className="posterImage__title">{show?show.name :" "}</div>
                            <div className="posterImage__runtime">
                                {show? show.premiered : ""}
                                <span className="posterImage__rating">
                                    {show? show.rating.average :""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{show? show.overview : ""}</div>
                        </div> */}
                    </Link>
                    
                )
            )
            }
        </Carousel>
        <MovieList/>
    </div>
</>
  )
}

export default Home