/*
  Author: Frenklin Mici
  This file's purpose is to be the router. All it does
  is set up the structure
*/

//import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import './variables.css'

//import pages here as i do them
import Home from './pages/Home.jsx';
import Chat from './pages/Chat.jsx'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Routes>
    </Router>
  );
}

export default App


 /*

 Example for using axios for fetch request.

  const [msg, setMsg] = useState('Loading...')

  useEffect(() => {
    axios.get('http://localhost:5001/')
      .then(res => setMsg(res.data.message))
      .catch(err => setMsg('Error connecting to backend: ', err.data.message))
  }, [])

  return <h1>{msg}</h1>




const fetchGame = async () => {
  try {
    const res = await fetch(url + "/api/" + gameId);
    const data = await res.json();
    setGame(data);
  } catch (err) {
    console.log("Error fetching game: ", err);
  }
};
f
useEffect() { fetchGame()
}


  */