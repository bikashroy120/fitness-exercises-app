import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../componets/Exercises';
import SearchExercises from '../componets/SearchExercises';
import HeroBanner from '../componets/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;