import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Repositories } from "../pages/Repositories"

export const AppRoutes = () =>{
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/repositories" element={<Repositories />} />
      <Route path="*" element={<Navigate to="/dashboard"/>} />
    </Routes>
  )
}

