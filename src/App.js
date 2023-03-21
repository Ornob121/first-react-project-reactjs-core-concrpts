import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const name = "Shadman Tahmid";
const singer = {
  name: "Dr.Mahfujur Rahman",
  job: "Singer",
};
const singer2 = {
  name: "Eva Rahman",
  job: "Singer",
};

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

const singers = [
  {name: 'Dr Mahfuj', job:'singer'},
  {name: 'Eva', job:'singer'},
  {name: 'Lala', job:'singer'},
  {name: 'Nila', job:'singer'}
]

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  )
};

function Users (props){
  return(
    <div>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter (){
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}


function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Job:{props.job}</p>
    </div>
  );
}

function Friend (props){
  console.log(props)
  return (
    <div className="container">
      <h3>{props.name}</h3>
      <p>Job:{props.job}</p>
    </div>
  )
}

export default App;
