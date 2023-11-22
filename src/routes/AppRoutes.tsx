import React from "react"
import { Routes, Route } from "react-router-dom"
import LandingPage from "../pages/LandingPage"
import DetalleTareaPage from "../pages/DetalleTareaPage"
import PorHacerPage from "../pages/PorHacerPage"
import EnProduccionPage from "../pages/EnProduccionPage"
import PorTestearPage from "../pages/PorTestearPage"
import CompletadasPage from "../pages/CompletadasPage"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detalle/:taskId" element={<DetalleTareaPage />} />
      <Route path="/por-hacer" element={<PorHacerPage/>} />
      <Route path="/en-produccion" element={<EnProduccionPage/>} />
      <Route path="/por-testear" element={<PorTestearPage/>} />
      <Route path="/completadas" element={<CompletadasPage/>} />
    </Routes>
  )
}

export default AppRoutes
