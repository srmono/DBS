import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {

  const todos = [
    { id: 1, title: "Git practice", completed: false},
    { id: 2, title: "React practice", completed: true},
    { id: 3, title: "UX Project", completed: true}
  ]

  return (
    <div className="App">
      {
        todos.length ?
          todos.map( todo => <Todo  todo={todo}  />)  :
          null
      }
    </div>
  )

}

export default App;
