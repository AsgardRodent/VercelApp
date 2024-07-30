
import React,{useState, useEffect} from 'react';
import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { supabase } from './createClient';
function App() {

  const [users,setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    FetchUsers()
  }, [])  


  async function FetchUsers(){
    const {data} = await supabase
    .from('users')
    .select('*')
    setUsers(data)
    console.log(data)
  }

  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}

export default App;
