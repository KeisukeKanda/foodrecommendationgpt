import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import GeneratedMenu from '../components/GenerateMenu';

const IdealNutrientInfo = (props) => {
  // モーダルの表示状態を管理するstateを追加
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [energy, setEnergy] = useState(null);
  const [nutrientInfo, setNutrientInfo] = useState({
    energy: null,
    proteinMin: null,
    proteinMax: null,
    histidine: null,
    isoleucine: null,
    leucine: null,
    lysine: null,
    sulfurAminoAcids: null,
    aromaticAminoAcids: null,
    threonine: null,
    Tryptophan: null,
    valine: null,
    fat: null,
    saturatedFat: null,
    monounsaturatedFat: null,
    polyunsaturatedFat: null,
    n6FattyAcids: null,
    n3FattyAcids: null,
    cholesterol: null,
    carbohydrate: null,
    fiber: null,
    vitaminA: null,
    vitaminD: null,
    vitaminE: null,
    vitaminK: null,
    vitaminB1: null,
    vitaminB2: null,
    niacin: null,
    vitaminB6: null,
    vitaminB12: null,
    folicAcid: null,
    pantothenicAcid: null,
    biotin: null,
    vitaminC: null,
    sodiumChlorideEquivalent: null,
    potassium: null,
    calcium: null,
    magnesium: null,
    phosphorus: null,
    iron: null,
    zinc: null,
    copper: null,
    manganese: null,
    iodine: null,
    selenium: null,
    chromium: null,
    molybdenum: null
  });

  useEffect(() => {
    //エネルギーの計算
    const { heightInCm, weight, goalWeight, age, gender, activityLevel } = props;

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

    let calculatedEnergy = bmr * multiplier;

    if (goalWeight !== null) {
      const weightDifference = goalWeight - weight;

      if (weightDifference <= -1) {
        calculatedEnergy -= 230;
      } else if (weightDifference >= 1) {
        calculatedEnergy += 230;
      }
    }


    if (age && gender && heightInCm && weight && activityLevel) {
        setEnergy(calculatedEnergy);
      } else {
        setEnergy(null);
      }

  }, [props.heightInCm, props.weight, props.goalWeight, props.age, props.gender, props.activityLevel]);

  const calculateNutrientInfo = () => {
    const { age, gender, weight, menstruation } = props;

    //他の栄養素の計算
    const proteinMin = energy ? (energy * 0.13) / 4 : null;
    const proteinMax = energy ? (energy * 0.2) / 4 : null;
    const histidine = weight ? 10 * weight : null;
    const isoleucine = weight ? 20 * weight : null;
    const leucine = weight ? 39 * weight : null;
    const sulfurAminoAcids = weight ? 15 * weight : null;
    const aromaticAminoAcids = weight ? 25 * weight : null;
    const lysine = weight ? 30 * weight : null;
    const threonine = weight ? 15 * weight : null;
    const Tryptophan = weight ? 4 * weight : null;
    const valine = weight ? 26 * weight : null;
    const fat = energy ? ((energy * 0.2) / 9).toFixed(2) + " - " + ((energy * 0.3) / 9).toFixed(2) : null;
    const saturatedFat = energy ? ((energy * 0.06) / 9).toFixed(2) + " - " + ((energy * 0.09) / 9).toFixed(2) : null;
    const monounsaturatedFat = energy ? ((energy * 0.08) / 9).toFixed(2) + " - " + ((energy * 0.12) / 9).toFixed(2) : null;
    const polyunsaturatedFat = energy ? ((energy * 0.06) / 9).toFixed(2) + " - " + ((energy * 0.09) / 9).toFixed(2) : null;
    const n6FattyAcids = energy ? ((energy * 0.048) / 9).toFixed(2) + " - " + ((energy * 0.072) / 9).toFixed(2) : null;
    const n3FattyAcids = energy ? ((energy * 0.012) / 9).toFixed(2) + " - " + ((energy * 0.018) / 9).toFixed(2) : null;
    const cholesterol = "200";
    const carbohydrate = energy ? ((energy * 0.5) / 4).toFixed(2) + " - " + ((energy * 0.65) / 4).toFixed(2) : null;
    const fiber = "18 - 24";

    const vitaminA = calculateVitaminA(age, gender);
    function calculateVitaminA(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 29) {
          return "850";
        } else if (age >= 30 && age <= 64) {
          return "900";
        } else if (age >= 65 && age <= 74) {
          return "850";
        } else if (age >= 75) {
          return "800";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 29) {
          return "650";
        } else if (age >= 30 && age <= 74) {
          return "700";
        } else if (age >= 75) {
          return "650";
        }
      }
        return null;
    }

    const vitaminD = 8.5;

    const vitaminE = calculateVitaminE(age, gender);
    function calculateVitaminE(age, gender) {
      if (gender === 'male') {
        if (age >= 18 && age <= 49) {
          return 6;
        } else if (age >= 50 && age <= 59) {
          return 7;
        } else if (age >= 60) {
          return 6.5;
        }
      } else if (gender === 'female') {
        if (age >= 18 && age <= 29) {
          return 5;
        } else if (age >= 30 && age <= 49) {
          return 5.5;
        } else if (age >= 50) {
          return 6.5;
        }
      }
    }

    const vitaminK = 150;

    const vitaminB1 = calculateVitaminB1(age, gender);
    function calculateVitaminB1(age, gender) {
      if (gender === 'male') {
        if (age >= 18 && age <= 49) {
          return 1.4;
        } else if (age >= 50 && age <= 74) {
          return 1.3;
        } else if (age >= 75) {
          return 1.2;
        }
      } else if (gender === 'female') {
        if (age >= 18 && age <= 74) {
          return 1.1;
        } else if (age >= 75) {
          return 0.9;
        }
      }
    }

    const vitaminB2 = calculateVitaminB2(age, gender);
    function calculateVitaminB2(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 49) {
          return "1.6";
        } else if (age >= 50 && age <= 74) {
          return "1.5";
        } else if (age >= 75) {
          return "1.3";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 74) {
          return "1.2";
        } else if (age >= 75) {
          return "1.0";
        }
      }
      return null;
    }

    const niacin = calculateNiacin(age, gender);
    function calculateNiacin(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 49) {
          return "15";
        } else if (age >= 50 && age <= 74) {
          return "14";
        } else if (age >= 75) {
          return "13";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 29) {
          return "11";
        } else if (age >= 30 && age <= 49) {
          return "12";
        } else if (age >= 50 && age <= 74) {
          return "11";
        } else if (age >= 75) {
          return "10";
        }
      }
      return null;
    }

    const vitaminB6 = gender === 'male' && age >= 18 ? 1.4 : gender === 'female' && age >= 18 ? 1 : null;
    const vitaminB12 = 2.4;
    const folicAcid = 240;

    const pantothenicAcid = calculatePantothenicAcid(age, gender);
    function calculatePantothenicAcid(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 49) {
          return "5";
        } else if (age >= 50) {
          return "6";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "5";
        }
      }
      return null;
    }

    const biotin = 50;
    const vitaminC = 100;
    const sodiumChlorideEquivalent = '<6';
    const potassium = gender === 'male' && age >= 18 ? 3000 : gender === 'female' && age >= 18 ? 2600 : null;

    const calcium = calculateCalcium(age, gender);
    function calculateCalcium(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 29) {
          return "800";
        } else if (age >= 30 && age <= 74) {
          return "750";
        } else if (age >= 75) {
          return "700";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 29) {
          return "650";
        } else if (age >= 30 && age <= 74) {
          return "650";
        } else if (age >= 75) {
          return "600";
        }
      }
      return null;
    }

    const magnesium = calculateMagnesium(age, gender);
    function calculateMagnesium(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 29) {
          return "340";
        } else if (age >= 30 && age <= 64) {
          return "370";
        } else if (age >= 65 && age <= 74) {
          return "350";
        } else if (age >= 75) {
          return "320";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 29) {
          return "270";
        } else if (age >= 30 && age <= 64) {
          return "290";
        } else if (age >= 65 && age <= 74) {
          return "280";
        } else if (age >= 75) {
          return "260";
        }
      }
      return null;
    }

    const phosphorus = gender === 'male' && age >= 18 ? 1000 : gender === 'female' && age >= 18 ? 800 : null;

    const iron = calculateIron(age, gender, menstruation);
    function calculateIron(age, gender, menstruation) {
      if (gender === "male") {
        if (age >= 18 && age <= 74) {
          return "7.5";
        } else if (age >= 75) {
          return "7";
        }
      } else if (gender === "female") {
        if (age >= 18 && age <= 49 && menstruation === "with") {
          return "10.5";
        } else if (age >= 50 && age <= 64 && menstruation === "with") {
          return "11";
        } else if (age >= 18 && age <= 64 && menstruation === "without") {
          return "6.5";
        } else if (age >= 65) {
          return "6";
        }
      }
      return null;
    }

    const zinc = calculateZinc(age, gender);
    function calculateZinc(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 74) {
          return "11";
        } else if (age >= 75) {
          return "10";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "8";
        }
      }
      return null;
    }

    const copper = calculateCopper(age, gender);
    function calculateCopper(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 74) {
          return "0.9";
        } else if (age >= 75) {
          return "0.8";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "0.7";
        }
      }
      return null;
    }

    const manganese = calculateManganese(age, gender);
    function calculateManganese(age, gender) {
      if (gender === "male") {
        if (age >= 18) {
          return "4";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "3.5";
        }
      }
      return null;
    }

    const iodine = 130;

    const selenium = calculateSelenium(age, gender);
    function calculateSelenium(age, gender) {
      if (gender === "male") {
        if (age >= 18) {
          return "30";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "25";
        }
      }
      return null;
    }

    const chromium = 10;

    const molybdenum = calculateMolybdenum(age, gender);
    function calculateMolybdenum(age, gender) {
      if (gender === "male") {
        if (age >= 18 && age <= 74) {
          return "30";
        } else if (age >= 75) {
          return "25";
        }
      } else if (gender === "female") {
        if (age >= 18) {
          return "25";
        }
      }
      return null;
    }

    const calculatedNutrientInfo = {
      energy,
      proteinMin,
      proteinMax,
      histidine,
      isoleucine,
      leucine,
      lysine,
      sulfurAminoAcids,
      aromaticAminoAcids,
      threonine,
      Tryptophan,
      valine,
      fat,
      saturatedFat,
      monounsaturatedFat,
      polyunsaturatedFat,
      n6FattyAcids,
      n3FattyAcids,
      cholesterol,
      carbohydrate,
      fiber,
      vitaminA,
      vitaminD,
      vitaminE,
      vitaminK,
      vitaminB1,
      vitaminB2,
      niacin,
      vitaminB6,
      vitaminB12,
      folicAcid,
      pantothenicAcid,
      biotin,
      vitaminC,
      sodiumChlorideEquivalent,
      potassium,
      calcium,
      magnesium,
      phosphorus,
      iron,
      zinc,
      copper,
      manganese,
      iodine,
      selenium,
      chromium,
      molybdenum
    };

    setNutrientInfo(calculatedNutrientInfo);

    if (props.onNutrientInfo && calculatedNutrientInfo.energy !== null) {
      props.onNutrientInfo(calculatedNutrientInfo);
    }
  };

  useEffect(() => {
    calculateNutrientInfo();
  }, [
    energy,
    props.heightInCm,
    props.weight,
    props.goalWeight,
    props.age,
    props.gender,
    props.activityLevel,
    props.menstruation,
  ]);

  // モーダルを開く関数
  const openModal = () => {
    setModalIsOpen(true);
  };

  // モーダルを閉じる関数
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center mt-4">
      {/* 1日に必要な栄養素を見るボタンを追加 */}
      <button onClick={openModal} className="bg-amber-500 hover:bg-amber-600 text-slate-50 font-bold py-2 px-4 rounded">1日に必要な栄養素を見る</button>

      {/* モーダルウィンドウのコンポーネントを追加 */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Nutrient Info Modal">
        <h1>1日に必要な栄養</h1>
        <ul>
          <li>1. 1日に必要な推定エネルギー: {nutrientInfo.energy === null ? "" : (nutrientInfo.energy === -230 ? "計算中..." : `${nutrientInfo.energy.toFixed(2)}kcal`)}</li>
          <li>2. たんぱく質推奨量: {nutrientInfo.proteinMin && nutrientInfo.proteinMax ? `${nutrientInfo.proteinMin.toFixed(2)}g - ${nutrientInfo.proteinMax.toFixed(2)}g` : ""}</li>
          <li>　不可欠アミノ酸必要量</li>
          <li>　　・ヒスチジン: {nutrientInfo.histidine ? `${nutrientInfo.histidine.toFixed(2)} mg` : ""} </li>
          <li>　　・イソロイシン: {nutrientInfo.isoleucine ? `${nutrientInfo.isoleucine.toFixed(2)} mg` : ""} </li>
          <li>　　・ロイシン: {nutrientInfo.leucine ? `${nutrientInfo.leucine.toFixed(2)} mg` : ""} </li>
          <li>　　・リシン: {nutrientInfo.lysine ? `${nutrientInfo.lysine.toFixed(2)} mg` : ""} </li>
          <li>　　・含硫アミノ酸: {nutrientInfo.sulfurAminoAcids === null ? "" : `${nutrientInfo.sulfurAminoAcids.toFixed(2)} mg`} </li>
          <li>　　・芳香属アミノ酸: {nutrientInfo.aromaticAminoAcids === null ? "" : `${nutrientInfo.aromaticAminoAcids.toFixed(2)} mg`} </li>
          <li>　　・トレオニン: {nutrientInfo.threonine ? `${nutrientInfo.threonine.toFixed(2)} mg` : ""} </li>
          <li>　　・トリプトファン: {nutrientInfo.Tryptophan ? `${nutrientInfo.Tryptophan.toFixed(2)} mg` : ""} </li>
          <li>　　・バリン: {nutrientInfo.valine ? `${nutrientInfo.valine.toFixed(2)} mg` : ""} </li>
          <li>3. 脂質: {nutrientInfo.fat === null ? "" : `${nutrientInfo.fat} g`} </li>
          <li>　・飽和脂肪酸: {nutrientInfo.saturatedFat === null ? "" : `${nutrientInfo.saturatedFat} g`} </li>
          <li>　・一価不飽和脂肪酸: {nutrientInfo.monounsaturatedFat === null ? "" : `${nutrientInfo.monounsaturatedFat} g`} </li>
          <li>　・多価不飽和脂肪酸: {nutrientInfo.polyunsaturatedFat === null ? "" : `${nutrientInfo.polyunsaturatedFat} g`} </li>
          <li>　・n-6系脂肪酸目安量: {nutrientInfo.n6FattyAcids === null ? "" : `${nutrientInfo.n6FattyAcids} g`} </li>
          <li>　・n-3系脂肪酸目安量: {nutrientInfo.n3FattyAcids === null ? "" : `${nutrientInfo.n3FattyAcids} g`} </li>
          <li>　・コレステロール: {nutrientInfo.cholesterol}mg以下</li>
          <li>4. 炭水化物: {nutrientInfo.carbohydrate === null ? "" : `${nutrientInfo.carbohydrate} g`} </li>
          <li>　・食物繊維: {nutrientInfo.fiber}g以上 </li>
          <li>5. ビタミン</li>
          <li>　・ビタミンA推奨量: {nutrientInfo.vitaminA === null ? "" : `${nutrientInfo.vitaminA} μgRAE`} </li>
          <li>　・ビタミンD目安量: {nutrientInfo.vitaminD}μg </li>
          <li>　・ビタミンE目安量: {nutrientInfo.vitaminE}mg </li>
          <li>　・ビタミンK目安量: {nutrientInfo.vitaminK}μg </li>
          <li>　・ビタミンB1 推奨量: {nutrientInfo.vitaminB1}mg </li>
          <li>　・ビタミンB2推奨量: {nutrientInfo.vitaminB2}mg </li>
          <li>　・ナイアシン推奨量: {nutrientInfo.niacin}mgNR </li>
          <li>　・ビタミンB6推奨量: {nutrientInfo.vitaminB6}mg </li>
          <li>　・ビタミンB12推奨量: {nutrientInfo.vitaminB12}μg </li>
          <li>　・葉酸推奨量: {nutrientInfo.folicAcid}μg </li>
          <li>　・パントテン酸目安量: {nutrientInfo.pantothenicAcid}mg </li>
          <li>　・ビオチン目安量: {nutrientInfo.biotin}μg </li>
          <li>　・ビタミンC推奨量: {nutrientInfo.vitaminC}mg </li>
          <li>　・ナトリウム食塩相当の理想量: {nutrientInfo.sodiumChlorideEquivalent}g </li>
          <li>　・カリウム目標量: {nutrientInfo.potassium}mg以上 </li>
          <li>　・カルシウム推奨量: {nutrientInfo.calcium}mg </li>
          <li>　・マグネシウム推奨量: {nutrientInfo.magnesium}mg </li>
          <li>　・リン目安量: {nutrientInfo.phosphorus}mg </li>
          <li>　・鉄推奨量: {nutrientInfo.iron}mg </li>
          <li>　・亜鉛推奨量: {nutrientInfo.zinc}mg </li>
          <li>　・銅推奨量: {nutrientInfo.copper}mg </li>
          <li>　・マンガン目安量: {nutrientInfo.manganese}mg </li>
          <li>　・ヨウ素推奨量: {nutrientInfo.iodine}μg </li>
          <li>　・セレン推奨量: {nutrientInfo.selenium}μg </li>
          <li>　・クロム目安量: {nutrientInfo.chromium}μg </li>
          <li>　・モリブデン推奨量: {nutrientInfo.molybdenum}μg </li>
        </ul>
        <div className="flex justify-center py-4">
          <button onClick={closeModal} className="bg-orange-100 hover:bg-orange-200 py-1 px-3 rounded">閉じる</button>
        </div>
      </Modal>
    </div>
  );
};
// }

export default IdealNutrientInfo;
