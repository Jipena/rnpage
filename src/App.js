import logo from './logo.svg';
import { NavbarComponent } from "./components/NavBar.js";
import { HomeComponent } from "./components/Home.js";
import { CvComponent } from "./components/Cv.js";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { SecretComponent } from './components/Secret';

export default function App() {
  return (
    <div>
    <HashRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<HomeComponent/>} />
        <Route path="/cv" element={<CvComponent/>} />
      </Routes>
  </HashRouter>
  <SecretComponent/>
  </div>
  // SecretComponent följer med på alla sidor
  )
};