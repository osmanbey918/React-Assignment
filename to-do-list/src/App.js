import './App.css';
// import Home from './pages/home/Home';
import store from './store/store';
import { Provider } from 'react-redux';
import  Counter  from './components/counter/Count';

function App() {
  return (
  
    <Provider store={store}>
      <Counter />
    </Provider>
    
  )
}

export default App;
