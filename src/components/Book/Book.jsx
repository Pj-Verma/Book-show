import React from 'react'
import { useParams } from "react-router-dom"
import  {useEffect, useState} from "react"


const Contact = () => {
  const [formStatus, setFormStatus] = useState('Book')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Booking...')
    const { date, email, tickets,city } = e.target.elements
    // let conFom = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // }
    // console.log(conFom)  ;

  }
  const [movieName, setName] = useState()
  const { id } = useParams()

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

  const getData = () => {
      fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(res => res.json())
      .then(data => setName(data))
  }
  return (
    <div className="container mt-5" id='contact'>
      <h2 className="mb-3"> Book My Show </h2>
      <h3 className="mb-3"> {`${movieName ? movieName.name : ""}`}</h3>
      <img width={120} src={`${movieName ? movieName.image.original : ""}`} />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="date">
            Date
          </label>
          <input className="form-control" type="date" id="id" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="tickets">
            No. of tickets
          </label>
          <input className="form-control" type="number" id="id" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="city">
            City
          </label>
          <input className="form-control" type="text" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
       
       
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact