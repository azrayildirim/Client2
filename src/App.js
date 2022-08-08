import logo from "./logo.svg";
import "./App.css";
import  Header from "./Components/Header";
import  Menu  from "./Components/Menu";
import Footer  from "./Components/Footer";
import Dashboard from "./Components/DashBoard";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="wrapper">
       <BrowserRouter>
      <Header />
      <Menu/>
      <switch>
      <Dashboard/>
      </switch>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
