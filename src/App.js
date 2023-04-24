import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import Form from './components/Form';
import Students from './components/Students';
import Fetch from './components/Fetch';

function App() 
{
  const students = [
    {name:"Charles", age:35}, {name:"Austin", age:13},{name:"Emily", age:16}
  ]
  return (
    <div className="App">
     <h1>SDFT04</h1>
     <Events students={students} tm="Beatrice"/>
     {/* <Form students={students} tm="Beatrice"/>
     <Students students={students} tm="Beatrice" /> */}
     <Fetch />
    </div>
  );
}

export default App;
