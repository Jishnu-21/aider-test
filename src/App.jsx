import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const data = [{
    name:"Jishnu",
    age:25,
    gender:"Male"
  },{
    name:"Jithin",
    age:27,
    gender:"Male"
  },{
    name:"Anjali",
    age:24,
    gender:"Female"      
  }]

  return (
    <>
      {data.map((item,i)=>{ 
        return <div key={i}>
          <h1>{item.name}</h1>
          <p>{item.age}</p>
          <p>{item.gender}</p>
        </div>
      })}
    </>
  );
}

export default App;
