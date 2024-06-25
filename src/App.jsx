import { useState } from "react";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserList from "./Pages/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={store}>
        <UserList />
      </Provider>
    </>
  );
}

export default App;
