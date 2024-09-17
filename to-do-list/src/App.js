import './App.css';
import AddStudent from './components/addstudents/Addstudents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='to-do-text'>Simple To-do List</p>

      </header>
      <AddStudent/>
    </div>
  );
}

export default App;
