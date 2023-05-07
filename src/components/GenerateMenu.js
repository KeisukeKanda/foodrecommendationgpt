import React, { useState } from 'react';
import { createMenu } from '../pages/api/chatgpt';

const GeneratedMenu = ({ nutrientInfo, allergies }) => {
  const [generatedMenu, setGeneratedMenu] = useState("");
  const [buttonText, setButtonText] = useState('メニューをつくる');
  const [loading, setLoading] = useState(false);
  const [howToMake, setHowToMake] = useState("");
  const [nutrientDetails, setNutrientDetails] = useState("");

  const generateMenu = async () => {
    setLoading(true);
    setGeneratedMenu("作り中...");
    const allergyString = allergies ? `ただし下記の食材はアレルギーのため避けてください：${allergies}。` : '';
    const prompt = `与えられた条件を完全に満たすような美味しい1日の食事メニューを提案して。条件は下記。エネルギー: ${nutrientInfo.energy} kcal、たんぱく質推奨量: ${nutrientInfo.proteinMin}g - ${nutrientInfo.proteinMax}g、ヒスチジン: ${nutrientInfo.histidine} mg、イソロイシン: ${nutrientInfo.isoleucine} mg、ロイシン: ${nutrientInfo.leucine} mg、リシン: ${nutrientInfo.lysine} mg、含硫アミノ酸: ${nutrientInfo.sulfurAminoAcids} mg、芳香属アミノ酸: ${nutrientInfo.aromaticAminoAcids} mg、トレオニン: ${nutrientInfo.threonine} mg、トリプトファン: ${nutrientInfo.tryptophan} mg、バリン: ${nutrientInfo.valine} mg、脂質: ${nutrientInfo.fat} g、飽和脂肪酸: ${nutrientInfo.saturatedFat} g、一価不飽和脂肪酸: ${nutrientInfo.monounsaturatedFat} g、多価不飽和脂肪酸: ${nutrientInfo.polyunsaturatedFat} g、n-6系脂肪酸目安量: ${nutrientInfo.n6FattyAcids} g、n-3系脂肪酸目安量: ${nutrientInfo.n3FattyAcids} g、コレステロール: ${nutrientInfo.cholesterol}mg以下、炭水化物: ${nutrientInfo.carbohydrate} g、食物繊維: ${nutrientInfo.fiber}g以上、ビタミンA推奨量: ${nutrientInfo.vitaminA} μgRAE、ビタミンD目安量: ${nutrientInfo.vitaminD}μg、ビタミンE目安量: ${nutrientInfo.vitaminE}mg、ビタミンK目安量: ${nutrientInfo.vitaminK}μg、ビタミンB1 推奨量: ${nutrientInfo.vitaminB1}mg、ビタミンB2推奨量: ${nutrientInfo.vitaminB2}mg、ナイアシン推奨量: ${nutrientInfo.niacin}mgNR、ビタミンB6推奨量: ${nutrientInfo.vitaminB6}mg、ビタミンB12推奨量: ${nutrientInfo.vitaminB12}μg、葉酸推奨量: ${nutrientInfo.folicAcid}μg、パントテン酸目安量: ${nutrientInfo.pantothenicAcid}mg、ビオチン目安量: ${nutrientInfo.biotin}μg、ビタミンC推奨量: ${nutrientInfo.vitaminC}mg、ナトリウム食塩相当量: ${nutrientInfo.sodiumChlorideEquivalent}g、カリウム目標量: ${nutrientInfo.potassium}mg以上、カルシウム推奨量: ${nutrientInfo.calcium}mg、マグネシウム推奨量: ${nutrientInfo.magnesium}mg、リン目安量: ${nutrientInfo.phosphorus}mg、鉄推奨量: ${nutrientInfo.iron}mg、亜鉛推奨量: ${nutrientInfo.zinc}mg、銅推奨量:${nutrientInfo.copper}mg、マンガン目安量: ${nutrientInfo.manganese}mg、ヨウ素推奨量: ${nutrientInfo.iodine}μg、セレン推奨量: ${nutrientInfo.selenium}μg、クロム目安量: ${nutrientInfo.chromium}μg、モリブデン推奨量: ${nutrientInfo.molybdenum}μg。さらに牛肉・豚肉などの赤身肉や乳製品を避けて、炭水化物は可能であれば全粒穀物（玄米、全粒粉、蕎麦粉など)だが、小麦もできるだけ避ける。小麦を食べる場合はスペルト小麦。遊離糖は総エネルギーの5%未満。果物と野菜（じゃがいも以外）は1日に少なくとも400g食べるが果物のジュースや清涼飲料水は避ける。豆類・ナッツ類を積極的に摂取する。魚を1日60~100g摂取する。油は調理で使うならオリーブオイルでサラダ油や植物油は避ける。亜麻仁油やえごま油はn-3系脂肪酸摂取のために摂取する。揚げ物は極力避ける。${allergyString}メニューは1)朝食:、2):昼食、3):夕食の形式に分けて提示して、メニュー以外の事は提示しないで。`; // ここで栄養情報を含めたプロンプトを作成
    const menu = await createMenu(prompt);
    setGeneratedMenu(menu);
    setLoading(false);
    setButtonText("別のメニューにする");
  };

  const getHowToMake = async () => {
    setLoading(true);
    setHowToMake("少々お待ちください...");
    const prompt = `${generatedMenu}のそれぞれの作り方・手順をそれぞれ具体的に提示して`;
    const response = await createMenu(prompt);
    setHowToMake(response);
    setLoading(false);
  };

  const getNutrientDetails = async () => {
    setLoading(true);
    setNutrientDetails("計算中...");
    const prompt = `${generatedMenu}に含まれる1日の全ての栄養素を計算して出力して`;
    const response = await createMenu(prompt);
    setNutrientDetails(response);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={generateMenu}>{buttonText}</button>
      <textarea value={generatedMenu} readOnly style={{ width: "100%", height: "200px", overflow: "auto" }} />
      <button onClick={getHowToMake}>作り方</button>
      <textarea value={howToMake} readOnly style={{ width: "100%", height: "200px", overflow: "auto" }} />
      <button onClick={getNutrientDetails}>含まれる栄養素を見る</button>
      <textarea value={nutrientDetails} readOnly style={{ width: "100%", height: "200px", overflow: "auto" }} />
    </div>
  );
};

export default GeneratedMenu;
