import React, {useReducer} from 'react'
import Hookcounter from './components/HookCounter';
import HookObject from './components/HookObject';
import HookEffect from './components/HookEffect'
import HookEffectById from './components/HookEffectById';
//import ComponentC from './components/ComponentC';
import ComponentA from './comp/ComponentA';
import ComponentB from './comp/ComponentB';
import ComponentC from './comp/ComponentC';
import './App.css'

// export const UserContext = React.createContext();
// export const ProjectContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment' : 
      return state + 1
    case 'decrement' :
      return state -1
    case 'reset' :
      return initialState
    default:
      return state
  }
}

function App() {

  const [count, dispatch] =  useReducer(reducer, initialState);

  return (
    <div className="App">

      Count - {count}

      <CountContext.Provider value={ {countState: count, countDispatch: dispatch}}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
      
      {/* <UserContext.Provider value={"DBS"}>
        <ProjectContext.Provider value={"Payment Project"}>
          <ComponentC />
        </ProjectContext.Provider>
      </UserContext.Provider> */}

      {/* <Hookcounter /> */}
      {/* <HookObject /> */}
      {/* <HookEffect /> */}
      {/* <HookEffectById /> */}
    </div>
  )
}

export default App
