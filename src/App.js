import {Box} from '@mui/material';
import Header from './componets/Header/Header';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';



function App() {
  return (
    <Box>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    </Box>
  );
}

export default App;
