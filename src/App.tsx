import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import LocationsPage from "./pages/LocationsPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import WebDesignPage from "./pages/WebDesignPage";
import AppDesignPage from "./pages/AppDesignPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/locations"} element={<LocationsPage />} />
        <Route path={"/contacts"} element={<ContactsPage />} />
        <Route path={"/web-design"} element={<WebDesignPage />} />
        <Route path={"/app-design"} element={<AppDesignPage />} />
        <Route path={"/graphic-design"} element={<GraphicDesignPage />} />

        <Route path={"/"} element={<HomePage />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
