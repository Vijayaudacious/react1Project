import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

function App() {
  return (        
    <>
       <Navbar title=" 09 Blog " AboutText="About US" />
       {/* <Navbar/> */}
       <div className="container">
       {/* <TextForm heading="Enter the text analyze below" /> */}
    
       </div>
       <About/>
    </>
  );
}

export default App;
