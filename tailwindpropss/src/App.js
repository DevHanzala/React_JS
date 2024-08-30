import './App.css';
import Cards from './Components/Cards';
import Pricing from './Components/Pricing';
import Navbar from './Navbar';
function App() {
  return (
    <>
<Navbar/>
     <div className="md:flex md:justify-evenly items-center">
    <Cards name="Emilia Clarke" btn="See more" />
    <Cards name="Kelli Jenner"/>
    <Cards name="Monika" btn="Come on"/>
</div>
<div className="md:flex md:justify-evenly items-center">
  <Pricing/>
</div>
    </>
  )
}

export default App;
