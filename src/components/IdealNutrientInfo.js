import React from 'react';

function IdealNutrientInfo({ energy, weight, age, gender, menstruation }) {
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

  return (
    <div>
      <h2>1日に必要な栄養素</h2>
      <ul>
        <li>1. 1日に必要な推定エネルギー: {energy === null ? "" : (energy === -230 ? "計算中..." : `${energy.toFixed(2)} kcal`)}</li>
        <li>2. たんぱく質推奨量: {proteinMin && proteinMax ? `${proteinMin.toFixed(2)}g - ${proteinMax.toFixed(2)}g` : ""}</li>
        <li>　不可欠アミノ酸必要量</li>
        <li>　　・ヒスチジン: {histidine ? `${histidine.toFixed(2)} mg` : ""} </li>
        <li>　　・イソロイシン: {isoleucine ? `${isoleucine.toFixed(2)} mg` : ""} </li>
        <li>　　・ロイシン: {leucine ? `${leucine.toFixed(2)} mg` : ""} </li>
        <li>　　・リシン: {lysine ? `${lysine.toFixed(2)} mg` : ""} </li>
        <li>　　・含硫アミノ酸: {sulfurAminoAcids === null ? "" : `${sulfurAminoAcids.toFixed(2)} mg`} </li>
        <li>　　・芳香属アミノ酸: {aromaticAminoAcids === null ? "" : `${aromaticAminoAcids.toFixed(2)} mg`} </li>
        <li>　　・トレオニン: {threonine ? `${threonine.toFixed(2)} mg` : ""} </li>
        <li>　　・トリプトファン: {Tryptophan ? `${Tryptophan.toFixed(2)} mg` : ""} </li>
        <li>　　・バリン: {valine ? `${valine.toFixed(2)} mg` : ""} </li>
        <li>3. 脂質: {fat === null ? "" : `${fat} g`} </li>
        <li>　・飽和脂肪酸: {saturatedFat === null ? "" : `${saturatedFat} g`} </li>
        <li>　・一価不飽和脂肪酸: {monounsaturatedFat === null ? "" : `${monounsaturatedFat} g`} </li>
        <li>　・多価不飽和脂肪酸: {polyunsaturatedFat === null ? "" : `${polyunsaturatedFat} g`} </li>
        <li>　・n-6系脂肪酸目安量: {n6FattyAcids === null ? "" : `${n6FattyAcids} g`} </li>
        <li>　・n-3系脂肪酸目安量: {n3FattyAcids === null ? "" : `${n3FattyAcids} g`} </li>
        <li>　・コレステロール: 200mg以下</li>
        <li>4. 炭水化物: {carbohydrate === null ? "" : `${carbohydrate} g`} </li>
        <li>　・食物繊維: {fiber}g以上 </li>
        <li>5. ビタミン</li>
        <li>　・ビタミンA推奨量: {vitaminA === null ? "" : `${vitaminA} μgRAE`} </li>
        <li>　・ビタミンD目安量: {vitaminD}μg </li>
        <li>　・ビタミンE 目安量: {vitaminE}mg </li>
        <li>　・ビタミンK目安量: {vitaminK}μg </li>
        <li>　・ビタミンB1 推奨量: {vitaminB1}mg </li>
        <li>　・ビタミンB2推奨量: {vitaminB2}mg/日 </li>
        <li>　・ナイアシン推奨量: {niacin}mgNR </li>
        <li>　・ビタミンB6推奨量: {vitaminB6}mg </li>
        <li>　・ビタミンB12推奨量: {vitaminB12}μg </li>
        <li>　・葉酸推奨量: {folicAcid}μg </li>
        <li>　・パントテン酸目安量: {pantothenicAcid}mg </li>
        <li>　・ビオチン目安量: {biotin}μg </li>
        <li>　・ビタミンC推奨量: {vitaminC}mg </li>
        <li>　・ナトリウム食塩相当の理想量: {sodiumChlorideEquivalent}g </li>
        <li>　・カリウム目標量: {potassium}mg以上 </li>
        <li>　・カルシウム推奨量: {calcium}mg </li>
        <li>　・マグネシウム推奨量: {magnesium}mg </li>
        <li>　・リン目安量: {phosphorus}mg </li>
        <li>　・鉄推奨量: {iron}mg </li>
        <li>　・亜鉛推奨量: {zinc}mg </li>
        <li>　・銅推奨量: {copper}mg </li>
        <li>　・マンガン目安量: {manganese}mg </li>
        <li>　・ヨウ素推奨量: {iodine}μg </li>
        <li>　・セレン推奨量: {selenium}μg </li>
        <li>　・クロム目安量: {chromium}μg </li>
        <li>　・モリブデン推奨量: {molybdenum}μg </li>
      </ul>
    </div>
  );
}

export default IdealNutrientInfo;
