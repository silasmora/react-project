import React, { Component } from 'react'
import './FilmListStyle.css'
export default class FilmList extends Component {

  constructor(props){
    super(props)

    this.state = {
      list: []
    }
  }

  getFilms() {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)

    .then((res) => res.json())

    .then((data) => {
      this.setState({
        list: data
      })
    })

    .catch((err) => console.error(err))
  }

  //2nd life cycle method
  componentDidMount() {
    this.getFilms()
  }

  //1st life cycle method
  render() {
    return (
      <ul className='tiles'>
        {this.state.list.map((film) => {
          return (
          <li key={film.id}>
            <h2 className='center-tiles'>{film.title}</h2>
            <img src={`${film.image}`} alt="Film Posters" />
            <a href={`${film}`}></a>
          </li>)
          
        })}
      </ul>
    )
  }
}
