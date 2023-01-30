import { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      list: ["ready", "set", "GO"],
      text: ""
    }


    this.onSubmit = this.onSubmit.bind(this)

  }

  onSubmit(event) {
    event.preventDefault()

    let newList = [...this.state.list, this.state.text]
    this.setState({ list: newList,  })
    // this.state({
    //   list: [...this.state.list, this.state.text]
    // })

  }

    render() {
      return (
        <div>
          <h1>Hello World!</h1>
          <form onSubmit={this.onSubmit}>
            <input 
            type="text"
            name='text'
            id='text'
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })} />
            <button type='submit'>Add</button>
          </form>
          <ul>
            {this.state.list.map((item, index) => {
              return <li key={item + index}>{item}</li>
            })}
          </ul>
        </div>
      )
    }

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

export default App;
