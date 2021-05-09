import Navbar from './components/presentations/Navbar';
import Home from './components/views/Home';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div> 
    </div>
  );
}

export default App;
