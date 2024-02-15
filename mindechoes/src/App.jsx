import './App.css';
import Navbar from './Components/Navbar';
import image1 from './assets/Section1.png';


function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <section className='section1'>
        <div>
          <h1>How are you feeling today?</h1>
        <button className='testbtn'>Take a Mental Health Test</button>
        </div>
        
        <img src={image1} alt='' className='section1img'/>
        <div><p>"You are the sky. Everything else is just the weather." - Pema Chödrön</p></div>
      </section>
    </div>
  );
}

export default App;
