import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import { HomePage, FilmsPage } from './pages';




export default function app(props) {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"element={ <HomePage/> }/>
        <Route path="films"element={ <FilmsPage/> }/>
      </Routes>
    </BrowserRouter>
  )
}


  // <li key={film.id}>
  // <h2 className='center-tiles'>{film.title}</h2>
  // <div className='img-card'>
  //   <img src={`${film.image}`} alt="Film Posters" />
  // </div>
  // {/* <a href={`${film}`}></a> */}
  // </li>)
  

  
