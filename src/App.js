import './App.css';
import { BackgroundVideo } from './components/Background/BackgroundVideo';
import video from './components/Background/background-aot.mp4';
import { TodoList } from './components/Todo/TodoList';
import background from './background.png';

function App() {
  return (
    <div className="App" style={{ background:`url(${ background })` }}>
      <div className="App__todos">
        <TodoList title="HIGH" timeout="700"/>   
        <TodoList title="LOW" timeout="700"/>
      </div>
      <BackgroundVideo className="App__video" value={ video } />
    </div>
  );
}

export default App;