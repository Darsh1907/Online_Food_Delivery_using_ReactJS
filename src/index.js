import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Main from './main';

const root = ReactDOM.createRoot(document.getElementById('root'));

const cost = ['150','200','100'];
const Name = ['Dhokla','Jalebi','Sev Usal'];

root.render(
  <React.StrictMode>
    <Main food={Name} price={cost}/>
  </React.StrictMode>
);

reportWebVitals();