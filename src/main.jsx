import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './styles/index.css'
import App from './App.jsx'
import Events from './Events.jsx'
import Locations from './Locations.jsx'
import Layout from './components/Layout.jsx'
import Seasons_Winners from './Seasons_Winners.jsx'
import Join_Us from './Join_Us.jsx'
import People from './People.jsx'
import Learn_to_Play from './Learn_to_Play.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Seasons_Winners" element={<Seasons_Winners />} />
          <Route path="/Join_Us" element={<Join_Us />} />
          <Route path="/People" element={<People />} />
          <Route path="/Learn_to_Play" element={<Learn_to_Play />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
