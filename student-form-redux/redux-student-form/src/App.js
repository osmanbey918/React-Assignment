import { Provider } from "react-redux";
import { store } from "./store/store";
import Add from "./components/add/Add";
import Form from "./components/form/Form";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Form/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
