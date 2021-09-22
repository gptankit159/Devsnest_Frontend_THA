import React from 'react';
import './App.css';

interface User {
  name: string,
  age : number,
  email : string
}
function App() {
  const user:User | null= {
    name: 'Ankit',
    age:30,
    email:"Ankit@gmail.com"
  }
  return (
    <div className="App">
      {
      user === null ? "loading" : (
        <div>
          <h4>{user.name}</h4>
          <h5>{user.age}</h5>
          <h5>{user.email}</h5>
        </div>
      )
      }
    </div>
  );
}

export default App;
