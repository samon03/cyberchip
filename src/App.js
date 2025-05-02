import './App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Cards from './components/Card/Cards';
import Workflow from './components/Workflow/Workflow';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div className="App bg-gradient-to-r from-purple-800 to-blue-700">
       <div className="mx-auto max-w-5xl">
          <Navbar/>
            <Main/>
            <Partners/>
            <Workflow/>
            <Cards/>
       </div>
    </div>
  );
}

export default App;
