import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AgeSelect from '../components/AgeSelect';
import GenderSelect from '../components/GenderSelect';
import HeightInput from '../components/HeightInput';
import WeightInput from '../components/WeightInput';
import IdealWeightInput from '../components/IdealWeightInput';
import GoalWeightInput from '../components/GoalWeightInput';
import ActivityLevelSelect from '../components/ActivityLevelSelect';
import AllergyInput from '../components/AllergyInput';

const Home = () => {
  const [heightInCm, setHeightInCm] = useState('');

  const handleHeightChange = (e) => {
    setHeightInCm(e.target.value);
  };

  return (
    <div>
      <Header />
      <AgeSelect />
      <GenderSelect />
      <HeightInput onChange={handleHeightChange} />
      <WeightInput />
      <IdealWeightInput heightInCm={heightInCm} />
      <GoalWeightInput />
      <ActivityLevelSelect />
      <AllergyInput />
      <Footer />
    </div>
  );
};

export default Home;
