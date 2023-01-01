
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Projects from "./pages/project/Projects";
import Contact from "./pages/contact/Contact";
import Info from "./pages/info/Info";

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='App'   >
    <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='projects' element={<Projects />} />
    <Route path='contact' element={<Contact />} />
    <Route path='info' element={<Info />} />
   </Routes>
   <Footer />
    </div>  
    
    </BrowserRouter>
    </>
  )
}

export default App
 