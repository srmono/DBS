import './App.css';
import React, {Component} from 'react';
import Greet from './Greet';
import Header from './Header'
import Message from './Message';
import Counter from './Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import RenderCondition from './RenderCondition';
import ToolsList from './ToolsList';
import FormHandling from './FormHandling';
import LifeCycleA from './LifeCycleA';
import PortalPopup from './PortalPopup';
import Tool from './Tool';
import ErrorBoundary from './ErrorBoundary';
import CounterClick from './CounterClick';
import CounterHover from './CounterHover';
import PostList from './PostList';

//class component
//class App extends React.Component{
class App extends Component{
  render(){
    return (
      <div className="App">
        
        <PostList />
        {/* <CounterClick />
        <CounterHover /> */}
        {/* <ErrorBoundary> 
          <Tool toolName="Java Script"/>
        </ErrorBoundary>

        <ErrorBoundary> 
          <Tool toolName="html"/>
        </ErrorBoundary>

        <ErrorBoundary> 
          <Tool toolName="css"/>
        </ErrorBoundary> */}
        {/* <PortalPopup/> */}
        {/* <LifeCycleA/> */}
        {/* <FormHandling /> */}
        {/* <ToolsList /> */}
        {/* <RenderCondition /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <Counter /> */}
        {/* <Message />    */}

        {/* <Greet name="Html" />
        <Greet name="CSS"/>
        <Greet name="Java Script"/>
        <Header tool="Node Js">
          <p> This is a child from parent </p>
        </Header> */}
      </div>
    )
  }
}

//export default App;
