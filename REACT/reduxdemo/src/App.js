import logo from './logo.svg';
import './App.css';
import GiftContainer from './components/GiftContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HooksGiftContainer from './components/HooksGiftContainer';
import GreetContainer from './components/GreetContainer';
import NewGiftContainer from './components/NewGiftContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <NewGiftContainer /> */}
        {/* <GreetContainer />
        <HooksGiftContainer /> */}
        {/* <GiftContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
