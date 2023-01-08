import About from './components/About';
import Contact from './components/Contact';
import Graphics from './components/Graphics';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <div class="text-center text-xs p-6 bg-black mt-16 md:mt-28">
    <span className='text-gray-400'>Made by R.</span>
    {/* <a class="text-gray-200 font-semibold" href="https://tailwind-elements.com/">Tailwind Elements</a> */}
  </div>
    </div>
  );
}

export default App;
