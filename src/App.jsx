import { useState } from 'react';
import FilmList from './components/FilmsList';


export default function App(props) {

  const [list, setlist] = useState(["ready", "set", "GO"])
  const [text, setText] = useState("")


  
  function onSubmit(event) {
    event.preventDefault()

    let newList = [...list, text]
    setlist(newList)
    setText("")
  } 
  

  return (
      <div>
          <h1 className='text-center'>Studio Ghibli Films</h1>
          <form onSubmit={onSubmit}>
          <input 
          type="text"
          name='text'
          id='text'
          value={text}
          onChange={(event) => setText(event.target.value)} />
          <button type='submit'>Add</button>
          </form>
          <ul>
            {list.map((item, index) => {
            return <li key={item + index}>{item}</li>
            })}
          </ul>
          <FilmList />
      </div>
  ) 
}





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h2>What is this thing react?</h2>
//         <p>
//           React is so cool!
//         </p>
//         <ul>
//           <li>Components</li>
//           <li>Modular</li>
//           <li>Resuable</li>
//         </ul>

//         <p></p>
        

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


