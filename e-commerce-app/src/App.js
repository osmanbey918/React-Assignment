import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/counter/Counter';
function App() {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  );
}

export default App;
