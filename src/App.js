import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
