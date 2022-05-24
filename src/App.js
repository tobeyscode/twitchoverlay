import React from 'react';
// import { Counter } from './features/counter/Counter';
import { useEffect } from 'react'
// import counterSlice from './features/counter/counterSlice';

function App() {
  const [state, setState] = React.useState({
    username: '',
    followers: 0,
    subscribers: 0,
    chat: null
  })
  const counter = React.useRef(0)

useEffect(() => {
  if(counter.current != null) {
    counter.current += 1
    const timer = setTimeout(() => setState({ num: state.num + 1}), 1000)
    console.log(counter)
    return () => clearTimeout(timer)
  }
})



  return (
    <div className="w-[1920px] h-[1080px] max-w-[1920px] max-h-[1080px] bg-red-400">
      <header className="w-full bg-green-200"><h1>testing</h1> </header>
        
        {/* <Counter /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
    </div>
  );
}

export default App;
