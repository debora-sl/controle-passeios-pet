import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import PasseiosPage from './pages/Main/CadastroPasseios'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/passeios' element={<PasseiosPage />} />
    </Routes>
  )
}
