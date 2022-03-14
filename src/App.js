import './App.css';
import { BackgroundVideo } from './components/Background/BackgroundVideo';
import { TodoList } from './components/Todo/TodoList';

function App() {
  return (
    <div className="App">
      <div className="App__todos">
        <TodoList title="HIGH" />   
        <TodoList title="LOW"/>
      </div>
      <BackgroundVideo className="App__video" src="./video/background-aot.mp4" />
    </div>
  );
}

export default App;