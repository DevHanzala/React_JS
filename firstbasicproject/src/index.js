import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chai  from './Chai';

// const reactelement={
//   type:'a',
//   props:{
//       href:"www.google.com",
//       target:'_blank'
//   },
//   children:'Click me to Visit Google'
// }

// const reactElement=React.createElement(
//   'a',
//   {href:"https://google.com",target:"_blank"},
//   'Click me To Visit Google'
// )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Chai/>   
    <><h1>Hanzala Ghani  and this method is called fragments</h1></>
    {/* reactElement */}
  </React.StrictMode>
);
