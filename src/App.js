import './App.css';
import Menu from './components/menu';
import Hero from './components/hero'
import TV from './components/TV';
import Sofa from './components/Sofa';
import Bed from './components/Bed';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <TV/>
      <Sofa/>
      <Bed/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
