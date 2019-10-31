import React from 'react';
import './index.css';
import axios from 'axios';

function App() {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    async function sorryHooks() {
      const response = await axios.get('/.netlify/functions/hello-world');
      setText(response.data.message);
    }
    sorryHooks();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src="./pumpkin.png" className="App-logo" alt="logo" />
        <p>Hello from Netlify 👻</p>
        <p>{text}</p>
      </header>
    </div>
  );
}

export default App;
