import React from 'react'
import './App.css'
import { useState, useEffect } from 'react';
import GitHubCard from './components/GitHubCard';
import NavTop from './components/NavTop';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <NavTop/>
      <div className="App pt-5">
        <Row>
            <Col style={{display: 'flex', justifyContent: 'center'}}>
              <GitHubCard/>
            </Col>
          </Row>
      </div>
    </div>
  );
}

export default App;
