
import './App.css';
//import About from './component/About';
import Navbar from './component/Navbar';
 import TextForm from './component/TextForm';

function App() {
  return (
    <>

  <Navbar title="TextUtils"/>
  <div className="container my-3">
  <TextForm heading ="Enter text to analyze"/>
  {/* <About/> */}

  </div>
  </>
  
  );
}

export default App;
