import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.css"
// import Form from "./components/form/Form";
import Main from "./components/main/Main";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
