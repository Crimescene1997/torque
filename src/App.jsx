import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage/"
import NavbarComponent from "./components/navbar"
import AboutPage from "./pages/aboutPage/"
import ContactPage from "./pages/contactPage/"
import BlogPage from "./pages/blogPage/"
import SupportPage from "./pages/supportPage/"
import EventsPage from "./pages/eventsPage/"
import GalleryPage from "./pages/galleryPage/"


function App() {
 

  return (
    <>
    
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="/events" element={<EventsPage/>}/>
      </Routes>
    </Router>
 
 </>
  )
}

export default App
