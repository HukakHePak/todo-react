import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  const placeholder = "Write your task";

  return (
    <div className="App">
      <TodoList title="LOW" placeholder={ placeholder } className="todo-high" />   
      <TodoList title="HIGH" placeholder={ placeholder } className="todo-low" />
    </div>
  );
}

export default App;
