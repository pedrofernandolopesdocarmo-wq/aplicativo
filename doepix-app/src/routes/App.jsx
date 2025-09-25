
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import CampaignNew from '../pages/CampaignNew'
import CampaignDetails from '../pages/CampaignDetails'
import Donate from '../pages/Donate'
import Credits from '../pages/Credits'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campanhas/nova" element={<CampaignNew />} />
        <Route path="/campanhas/:id" element={<CampaignDetails />} />
        <Route path="/doar" element={<Donate />} />
        <Route path="/creditos" element={<Credits />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}
