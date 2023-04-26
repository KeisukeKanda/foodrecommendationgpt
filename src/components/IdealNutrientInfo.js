import React from 'react';

function IdealNutrientInfo({ energy, weight }){
  const proteinMin = energy ? (energy * 0.13) / 4 : null;
  const proteinMax = energy ? (energy * 0.2) / 4 : null;
  const histidine = weight ? 10 * weight : null;

  return (
    <div>
      <h2>1日に必要な栄養素</h2>
      <ul>
        <li>1. 1日に必要な推定エネルギー: {energy === null ? "" : (energy === -230 ? "計算中..." : `${energy.toFixed(2)} kcal`)}</li>
        <li>2. たんぱく質推奨量: {proteinMin && proteinMax ? `${proteinMin.toFixed(2)}g - ${proteinMax.toFixed(2)}g` : ""}</li>
        <li>　不可欠アミノ酸必要量</li>
        <li>　　・ヒスチジン: {histidine ? `${histidine.toFixed(2)} mg` : ""}</li>
        <li>　　・イソロイシン: </li>
        <li>　　・ロイシン: </li>
        <li>　　・リシン: </li>
        <li>　　・含硫アミノ酸: </li>
        <li>　　・芳香属アミノ酸: </li>
        <li>　　・トレオニン: </li>
        <li>　　・トリプトファン: </li>
        <li>　　・バリン: </li>
        <li>3. 脂質</li>
        <li>　・飽和脂肪酸:</li>
        <li>　・n-6系脂肪酸目安量: </li>
        <li>　・n-3系脂肪酸目安量: </li>
        <li>　・コレステロール: </li>
        <li>4. 炭水化物:</li>
        <li>　・食物繊維:</li>
        <li>5. ビタミン</li>
        <li>　・ビタミンA推奨量</li>
        <li>　・ビタミンD目安量</li>
        <li>　・ビタミンE 目安量</li>
        <li>　・ビタミンK目安量</li>
        <li>　・ビタミンB1 推奨量</li>
        <li>　・ビタミンB2推奨量</li>
        <li>　・ナイアシン推奨量</li>
        <li>　・ビタミンB6推奨量</li>
        <li>　・ビタミンB12推奨量</li>
        <li>　・葉酸推奨量</li>
        <li>　・パントテン酸目安量</li>
        <li>　・ビオチン目安量</li>
        <li>　・ビタミンC推奨量</li>
        <li>6. ミネラル</li>
        <li>　・ナトリウム食塩相当</li>
        <li>　・カリウム目標量</li>
        <li>　・カルシウム推奨量</li>
        <li>　・マグネシウム推奨量</li>
        <li>　・リン目安量</li>
        <li>　・鉄推奨量</li>
        <li>　・亜鉛推奨量</li>
        <li>　・銅推奨量</li>
        <li>　・マンガン目安量</li>
        <li>　・ヨウ素推奨量</li>
        <li>　・セレン推奨量</li>
        <li>　・クロム目安量</li>
        <li>　・モリブデン推奨量</li>
      </ul>
    </div>
  );
}

export default IdealNutrientInfo;
