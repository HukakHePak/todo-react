import './App.css';
import { BackgroundVideo } from './components/Background/FullVideo';
import { TodoList } from './components/Todo/TodoList';

function App() {
  const placeholder = "Write your task";
  const backgrSource = './video/background-aot.mp4'

  return (
    <div className="App">
      <div className="App__todos">
        <TodoList className="App__todo"  title="LOW" placeholder={ placeholder } />   
        <TodoList className="App__todo" title="HIGH" placeholder={ placeholder } />
      </div>
      <BackgroundVideo className={'App__video'} src={ backgrSource } />
    </div>
  );
}

export default App;
