import logo from './logo.svg';
import './App.css';
import { LiveTime } from './test';
import { useState } from 'react';
import Layout from './ContextExample/Layout';
import MainContent from './ContextExample/MainContent';

function App() {

  return (
      <div>
        <Layout>
          <MainContent>
          </MainContent>
        </Layout>
      </div>
    
  );
}

export default App;
