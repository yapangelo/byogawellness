import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import YogaTherapy from "./pages/YogaTherapy/YogaTherapy";
import TeacherTraining from "./pages/TeacherTraining/TeacherTraining";
import StudioClasses from "./pages/StudioClasses/StudioClasses";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/therapy" element={<YogaTherapy />} />
        <Route path="/training" element={<TeacherTraining />} />
        <Route path="/classes" element={<StudioClasses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
