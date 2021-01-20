// import logo from './logo.svg';
import "./App.scss";
import About from "./shared/components/About/About";
import Contact from "./shared/components/Contact/Contact";
// import Footer from "./shared/components/Footer/Footer";
import Header from "./shared/components/Header/Header";
// import Projects from "./shared/components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      {/* <Projects></Projects> */}
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
