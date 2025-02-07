import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from './components/ErrorBoundary';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Pictures } from "./pages/Pictures";
import { SEO } from "@/components/SEO";
import './index.css'

const App = () => (
  <ErrorBoundary>
    <SEO />
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pictures" element={<Pictures />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </ErrorBoundary>
);

export default App;