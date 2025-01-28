import React from 'react';
import UserList from './components/UserList';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';


function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <UserList />
      </div>
    </ErrorBoundary>
  );
}

export default App;