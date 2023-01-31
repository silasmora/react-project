import React, { useEffect, useState } from 'react'

import './FilmListStyle.css'


export default function FilmList(props) {
  
  const [list, setList] = useState([])

  useEffect(() => {
    getFilms()
  }, [])
  

  function getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)

    .then((res) => res.json())

    .then((films) => setList(films))
    
    .catch((err) => console.error(err))
  }

 
  return (
      <div>
        <ul className='tiles-card'>
        {list.map((film) => {
          return (
            <li key={film.id}>
            <h2 className='center-tiles'>{film.title}</h2>
            <div className='img-card'>
              <img src={`${film.image}`} alt="Film Posters" />
            </div>
            <a href={`${film}`}></a>
            </li>)
          })}
        </ul>
      </div>
  )
}

