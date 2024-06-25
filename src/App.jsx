import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserList from './Pages/UserList';
import store from './Redux/Store';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Provider store={store}> */}
      <UserList />
      {/* </Provider> */}
    </>
  );
}

export default App;
