import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './app.scss';
import PortfolioCompiler from "./components/Compilers/PortfolioCompiler";
import ContactCompiler from "./components/Compilers/ContactCompiler";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<PortfolioCompiler />}></Route>
          <Route exact path='/contact' element={<ContactCompiler />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
