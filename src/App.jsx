import React from 'react';
import UserList from './components/UserList';
import data from './assets/data.json';

function App() {
  return (
    <div>
      <UserList users={data} />
    </div>
  )
}
  
export default App
