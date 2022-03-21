import "./App.css";
import { BackgroundVideo } from "./components/Background/BackgroundVideo";
import video from "./components/Background/background-aot.mp4";
import { TodoList } from "./components/Todo/TodoList";
import background from "./background.png";
import { createTask } from "./todo/createTask";

const defaults = {
  todo: {
    high: [
      createTask("стать нацистом", true),
      createTask("устроить геноцид"),
      createTask("уничтожить большую часть населения планеты")      
    ],
    low: [
      createTask("обидеть Микасу", true),
      createTask("стать клоуном", true)
    ],
  },
};

function App() {
  return (
    <div className="App" style={{ background: `url(${background})` }}>
      <div className="App__todos">
        <TodoList title="HIGH" list={defaults.todo.high} />
        <TodoList title="LOW" list={defaults.todo.low} />
      </div>
      <BackgroundVideo className="App__video" value={video} />
    </div>
  );
}

export default App;
