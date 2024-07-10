import { store } from "./store/store";
import { Provider } from "react-redux";
import TaskContainer from "./components/TaskContainer";
function App() {
  return (
    <Provider store={store}>
    < TaskContainer/>
    </Provider>
  );
}

export default App;
