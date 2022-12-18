
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AddPage from './components/AddPage'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import TicketList from './components/TicketList'
import WinnerList from './components/WinnerList'

function App() {
  return (
    <div className=' relative h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/winners' element={<WinnerList />} />
        <Route path='/list' element={<TicketList />} />
      </Routes>
    </div>
  )
}

export default App
