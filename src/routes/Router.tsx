import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default AppRouter