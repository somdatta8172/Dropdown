import React from 'react';
import './scss/App.scss';
import Dropdown from './Dropdown';

const items = [
  {
    id: 1,
    value: 'Yes',
  },
  {
    id: 2,
    value: 'No',
  },
  {
    id: 3,
    value: 'Maybe',
  },
];

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Should you use a dropdown?
      </h1>
      <Dropdown title="Select your option/options" items={items} multiSelect />
    </div>
  );
}

export default App;
