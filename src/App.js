// import logo from './logo.svg';
import {Login} from './components/Login/Login.js';
import './App.css';
// import { Todo } from './components/Todo/Todo.js';
import { Header } from './components/Header/Header.js';
import { Todo } from './components/Todo/Todo.js';


function App() {
  return (

    <div className="App">
        <Login></Login>
        <Todo></Todo>
     
        
        {/* <Todo></Todo>
        
        <Header></Header>
        <Header firstName="Rami" lastName="Shmila"></Header>
        <Header firstName="Doron" lastName="Arnon"></Header>
        <Header firstName="Igor" ></Header> */}
        
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
