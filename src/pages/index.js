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
import MenstruationInput from "../components/MenstruationInput";
import AllergyInput from '../components/AllergyInput';
import WantedIngredientsInput from '../components/WantedIngredientsInput';
import GenerateMenu from '../components/GenerateMenu';
import IdealNutrientInfo from '../components/IdealNutrientInfo';


const Home = () => {
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("male");
  const [heightInCm, setHeightInCm] = useState(null);
  const [weight, setWeight] = useState(null);
  const [goalWeight, setGoalWeight] = useState(null);
  const [activityLevel, setActivityLevel] = useState(1);
  const [menstruation, setMenstruation] = useState("with");
  const [allergies, setAllergies] = useState('');
  const [wantedIngredients, setWantedIngredients] = useState('');
  const [nutrientInfo, setNutrientInfo] = useState(null);


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

  const handleMenstruationChange = (e) => {
    setMenstruation(e.target.value);
  };

  const handleAllergyChange = (allergyList) => {
    setAllergies(allergyList);
  };

  const handleWantedIngredientsChange = (ingredientsList) => {
    setWantedIngredients(ingredientsList);
  };

  const handleNutrientInfo = (info) => {
    setNutrientInfo(info);
  };


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
      {gender === "female" && age >= 18 && age <= 64 && (
        <MenstruationInput
          menstruation={menstruation}
          onMenstruationChange={handleMenstruationChange}
        />
      )}
      <AllergyInput onAllergyChange={handleAllergyChange} />
      <WantedIngredientsInput onWantedIngredientsChange={handleWantedIngredientsChange} />
      <IdealNutrientInfo heightInCm={heightInCm} weight={weight} goalWeight={goalWeight} age={age} gender={gender} activityLevel={activityLevel} menstruation={menstruation} onNutrientInfo={handleNutrientInfo} nutrientInfo={nutrientInfo} />
      <GenerateMenu nutrientInfo={nutrientInfo} allergies={allergies} wantedIngredients={wantedIngredients} />
      <Footer />
    </div>
  );
};

export default Home;
