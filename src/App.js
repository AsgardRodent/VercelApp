import './App.css';
import LoginForm from './Components/LoginForm/LoginForm';
import { supabase } from './createClient';
function App() {
  return (
    <div className="App">
      <LoginForm/>
    </div>
  );
}

export default App;
