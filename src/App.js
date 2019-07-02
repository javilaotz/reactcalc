import React, { useState } from 'react';
import { Alert } from 'reactstrap'

import './App.css';
import Calculator from './components/Calculator'

export default function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="App">
      <div className="floating-alert">
        <Alert color="danger" isOpen={visible} toggle={() => setVisible(!visible)}>
          Math Error
        </Alert>
      </div>
      <header className="App-header">
        <Calculator setVisible={setVisible}/>
      </header>
    </div>
  );
}
