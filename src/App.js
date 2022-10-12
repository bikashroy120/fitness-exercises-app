import {Box} from '@mui/material';
import Header from './componets/Header/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import ExersiceDeteles from './pages/ExersiceDeteles/ExersiceDeteles';
import './App.css'



function App() {
  return (
    <Box >
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":teamId" element={<ExersiceDeteles />} />
    </Routes>
    </Box>
  );
}

export default App;
