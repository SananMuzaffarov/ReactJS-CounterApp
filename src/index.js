import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Components/Counter';
import './index.css'; 

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

class App extends Component{
  render(){
    return(
      <div className='container'>
        <Counter />
      </div>
    );
  }
}
root.render(<App />);

