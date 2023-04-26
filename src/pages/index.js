import React, { useState, useEffect } from 'react';
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
import IdealNutrientInfo from '../components/IdealNutrientInfo';

const Home = () => {
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("male");
  const [heightInCm, setHeightInCm] = useState(null);
  const [weight, setWeight] = useState(null);
  const [goalWeight, setGoalWeight] = useState(null);
  const [activityLevel, setActivityLevel] = useState(1);

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeightInCm(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleGoalWeightChange = (e) => {
    setGoalWeight(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
  setActivityLevel(parseInt(e.target.value));
  };

  const [energy, setEnergy] = useState(null);

  useEffect(() => {
  const calculateEnergy = () => {
    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * heightInCm - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * heightInCm - 4.330 * age;
    }

    let multiplier = 0;
    switch (activityLevel) {
      case 1:
        multiplier = 1.2;
        break;
      case 2:
        multiplier = 1.375;
        break;
      case 3:
        multiplier = 1.55;
        break;
      case 4:
        multiplier = 1.725;
        break;
      case 5:
        multiplier = 1.9;
        break;
      default:
        multiplier = 1;
        break;
    }

    let energy = bmr * multiplier;

    if (goalWeight !== null) {
      const weightDifference = goalWeight - weight;

      if (weightDifference <= -1) {
        energy -= 230;
      } else if (weightDifference >= 1) {
        energy += 230;
      }
    }

    setEnergy(energy);
  };

  if (age && gender && heightInCm && weight && activityLevel) {
    calculateEnergy();
  } else {
    setEnergy(null);
  }
}, [age, gender, heightInCm, weight, goalWeight, activityLevel]);



  return (
    <div>
      <Header />
      <AgeSelect age={age} onAgeChange={handleAgeChange} />
      <GenderSelect onGenderChange={handleGenderChange} gender={gender} />
      <HeightInput onChange={handleHeightChange} />
      <WeightInput onChange={handleWeightChange} />
      <IdealWeightInput heightInCm={heightInCm} />
      <GoalWeightInput onChange={handleGoalWeightChange} />
      <ActivityLevelSelect onActivityLevelChange={handleActivityLevelChange} />
      <AllergyInput />
      <IdealNutrientInfo energy={energy} weight={weight} />
      <Footer />
    </div>
  );
};

export default Home;
