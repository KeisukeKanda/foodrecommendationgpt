// pages/calculation.js
import React from 'react';
import Footer from '../components/Footer';

const Calculation = () => {
  return (
    <div>
      <div className='w-11/12 bg-sky-50 rounded-xl mt-8 mx-auto'>
        <div className='p-6'>
          <h1 className='underline decoration-amber-500 decoration-4 pb-1 font-semibold'>栄養素の計算</h1>
          <div className='pb-8'>
            <p>本サービスの機能の一つである1日に必要な栄養素の計算をどのように行なっているかを説明します。</p>
            <p>基本的に日本人の食事摂取基準2020年版を元に算出していますが、一部はWHOのSustainable healthy diet: guiding principleや細胞環境デザイン学の考え方を重視しています。本サービスの対象としては煩雑な計算となってしまう事を避けるために18歳以上の方を対象としています。基本的にほとんどの方にご利用いただけますが、慢性腎臓病をお持ちの方はCKDステージ1からG3aまでを対象としており、それ以上のステージの方は医師や管理栄養士にご相談いただく必要があります。</p>
          </div>
          <h2 className='underline decoration-sky-500 decoration-4 pb-1 font-semibold'>1日に必要なエネルギー</h2>
          <div className='pb-8'>
            <p>エネルギーの計算はHarris-Benedictの式（基礎エネルギー消費量BEE）と活動レベル（1-5段階）から計算しています。</p>
            <p className='mt-3 underline'>基礎エネルギー消費量BEEの計算</p>
            <p>・男性BEE = 66.47 + 13.75×(体重) + 5.00×(身長) - 6.76×(年齢)</p>
            <p>・女性BEE = 655.10 + 9.56×(体重) + 1.84×(身長) - 4.68×(年齢)</p>
            <p className='mt-3 underline'>1日に必要な推定エネルギーの計算</p>
            <p>活動レベル1（ほとんど運動しない）：BEE×1</p>
            <p>活動レベル2（週に1-3日程度運動する）：BEE×1.2</p>
            <p>活動レベル3（週に3-5日程度運動する）：BEE×1.375</p>
            <p>活動レベル4（週に6-7日程度運動する）：BEE×1.55</p>
            <p>活動レベル5（肉体労働者または競技者）：BEE×1.9</p>
            <p className='mt-3'>その上で、現在の体重が目標とする体重より1kg以上多い場合は、1ヶ月で1kg体重が減るように（1日に-230kcalと設定）、1日に必要な推定エネルギーから-230kcalをして計算しています。同様に現在の体重が目標とする体重より1kg以上少ない場合は、1ヶ月で1kg体重が増えるように、1日に必要な推定エネルギーから+230kcalをして計算しています。</p>
          </div>
          <h3 className='underline decoration-sky-500 decoration-4 pb-1 font-semibold'>タンパク質必要量</h3>
          <div className='pb-8'>
            <p>1日に必要な推定エネルギーの13〜20%として計算</p>
            <p className='mt-3'>不可欠アミノ酸必要量</p>
            <p>・ヒスチジン：10mg/体重（kg）で計算</p>
            <p>・イソロイシン：20mg/体重（kg）で計算</p>
            <p>・ロイシン：39mg/体重（kg）で計算</p>
            <p>・リシン：30mg/体重（kg）で計算</p>
            <p>・含硫アミノ酸：15mg/体重（kg）で計算</p>
            <p>・芳香族アミノ酸：25mg/体重（kg）で計算</p>
            <p>・トレオニン：15mg/体重（kg）で計算</p>
            <p>・トリプトファン：4mg/体重（kg）で計算</p>
            <p>・バリン：26mg/体重（kg）で計算</p>
          </div>
          <h4 className='underline decoration-sky-500 decoration-4 pb-1 font-semibold'>脂質</h4>
          <div className='pb-8'>
            <p>1日に必要な推定エネルギーの20〜30%として計算</p>
            <p className='mt-3'>飽和脂肪酸：一価不飽和脂肪酸：多価不飽和脂肪酸＝3：4：3が理想的とされ、また多価不飽和脂肪酸の中でn-6系脂肪酸：n-3系脂肪酸＝4：1が理想的と言われており下記のように計算。</p>
            <p className='mt-3'>・飽和脂肪酸：1日に必要な推定エネルギーの6〜9%で計算</p>
            <p>・一価不飽和脂肪酸：1日に必要な推定エネルギーの8〜12%で計算</p>
            <p>・多価不飽和脂肪酸：1日に必要な推定エネルギーの6〜9%で計算</p>
            <p>・n-6系脂肪酸目安量：1日に必要な推定エネルギーの4.8〜7.2%で計算</p>
            <p>・n-3系脂肪酸目安量：1日に必要な推定エネルギーの1.2〜1.8%で計算</p>
            <p>・コレステロール200mg以下</p>
          </div>
          <h5 className='underline decoration-sky-500 decoration-4 pb-1 font-semibold'>炭水化物</h5>
          <div className='pb-8'>
            <p>1日に必要な推定エネルギーの50〜65%で計算</p>
            <p className='mt-3'>・食物繊維は18〜24g以上</p>
          </div>
          <h6 className='underline decoration-sky-500 decoration-4 pb-1 font-semibold'>ビタミン</h6>
          <div className='pb-8'>
            <p>・ビタミンA推奨量</p>
            <p>年齢が18-29歳の男性：800μgRAE</p>
            <p>年齢が18-29歳の女性：650μgRAE</p>
            <p>年齢が30-64歳の男性：900μgRAE</p>
            <p>年齢が30-74歳の女性：700μgRAE</p>
            <p>年齢が65-74歳の男性：850μgRAE</p>
            <p>年齢が75歳以上の男性：800μgRAE</p>
            <p>年齢が75歳以上の女性：650μgRAE</p>
            <p className='mt-3'>・ビタミンD目安量：8.5μg</p>
            <p className='mt-3'>・ビタミンE目安量</p>
            <p>年齢が18-49歳男性：6mg</p>
            <p>年齢が18-29歳女性：5mg</p>
            <p>年齢が30-49歳女性：5.5mg</p>
            <p>年齢が50-59歳男性：7mg</p>
            <p>年齢が50歳以上の女性：6.5mg</p>
            <p>年齢が60歳以上の男性：6.5mg</p>
            <p className='mt-3'>・ビタミンK目安量：150μg</p>
            <p className='mt-3'>・ビタミンB1推奨量</p>
            <p>年齢が18-49歳の男性：1.4mg</p>
            <p>年齢が18-74歳の女性：1.1mg</p>
            <p>年齢が50-74歳の男性：1.3mg</p>
            <p>年齢が75歳以上の男性：1.2mg</p>
            <p>年齢が75歳以上の女性：0.9mg</p>
            <p className='mt-3'>・ビタミンB2推奨量</p>
            <p>年齢が18-49歳の男性：1.6mg</p>
            <p>年齢が18-74歳の女性：1.2mg</p>
            <p>年齢が50-74歳の男性：1.5mg</p>
            <p>年齢が75歳以上の男性：1.3mg</p>
            <p>年齢が75歳以上の女性：1mg</p>
            <p className='mt-3'>・ナイアシン推奨量</p>
            <p>年齢が18-49歳の男性：15mgNR</p>
            <p>年齢が18-29歳の女性：11mgNR</p>
            <p>年齢が30-49歳の女性：12mgNR</p>
            <p>年齢が50-74歳の男性：14mgNR</p>
            <p>年齢が50-74歳の女性：11mgNR</p>
            <p>年齢が75歳以上の男性：13mgNR</p>
            <p>年齢が75歳以上の女性：10mgNR</p>
            <p className='mt-3'>・ビタミンB6推奨量</p>
            <p>年齢が18歳以上の男性：1.4mg</p>
            <p>年齢が18歳以上の女性では1mg</p>
            <p className='mt-3'>・ビタミンB12推奨量：2.4μg</p>
            <p className='mt-3'>・葉酸推奨量：240μg</p>
            <p className='mt-3'>・パントテン酸目安量</p>
            <p>年齢が18-49歳の男性：5mg</p>
            <p>年齢が50歳以上の男性：6mg</p>
            <p>年齢が18歳以上の女性：5mg</p>
            <p className='mt-3'>・ビオチン目安量：50μg</p>
            <p className='mt-3'>・ビタミンC推奨量は100mg</p>
            <p className='mt-3'>・ナトリウム食塩相当の理想量：6g未満</p>
            <p className='mt-3'>・カリウム目標量</p>
            <p>年齢が18歳以上の男性：3000mg以上</p>
            <p>年齢が18歳以上の女性：2600mg以上</p>
            <p className='mt-3'>・カルシウム推奨量</p>
            <p>年齢が18-29歳の男性：800mg</p>
            <p>年齢が18-74歳の女性：650mg</p>
            <p>年齢が30-74歳の男性：750mg</p>
            <p>年齢が75歳以上の男性：700mg</p>
            <p>年齢が75歳以上の女性：600mg</p>
            <p className='mt-3'>・マグネシウム推奨量</p>
            <p>年齢が18-29歳の男性：340mg</p>
            <p>年齢が18-29歳の女性：270mg</p>
            <p>年齢が30-64歳の男性：370mg</p>
            <p>年齢が65-74歳の男性：350mg</p>
            <p>年齢が65-74歳の女性：280mg</p>
            <p>年齢が75歳以上の男性：320mg</p>
            <p>年齢が75歳以上の女性：260mg</p>
            <p className='mt-3'>・リン目安量</p>
            <p>年齢が18歳以上の男性：1000mg</p>
            <p>年齢が18歳以上の女性：800mg</p>
            <p className='mt-3'>・鉄推奨量</p>
            <p>年齢が18-74歳の男性：7.5mg</p>
            <p>年齢が18-49歳の女性で月経がある：10.5mg</p>
            <p>年齢が18-64歳の女性で月経がない：6.5mg</p>
            <p>年齢が50-64歳の女性で月経がある：11mg</p>
            <p>年齢が65歳以上の女性：6mg</p>
            <p>年齢が75歳以上の男性：7mg</p>
            <p className='mt-3'>・亜鉛推奨量</p>
            <p>年齢が18-74歳の男性：11mg</p>
            <p>年齢が18歳以上の女性：8mg</p>
            <p>年齢が75歳以上の男性：10mg</p>
            <p className='mt-3'>・銅推奨量</p>
            <p>年齢が18-74歳の男性：0.9mg</p>
            <p>年齢が18歳以上の女性：0.7mg</p>
            <p>年齢が75歳以上の男性：0.8mg</p>
            <p className='mt-3'>・マンガン目安量</p>
            <p>年齢が18歳以上の男性：4mg</p>
            <p>年齢が18歳以上の女性：3.5mg</p>
            <p className='mt-3'>・ヨウ素推奨量：130μg</p>
            <p className='mt-3'>・セレン推奨量</p>
            <p>年齢が18歳以上の男性：30μg</p>
            <p>年齢が18歳以上の女性：25μg</p>
            <p className='mt-3'>・クロム目安量：10μg</p>
            <p className='mt-3'>・モリブデン推奨量</p>
            <p>年齢18-74歳の男性：30μg</p>
            <p>年齢が18歳以上の女性：25μg</p>
            <p>年齢が75歳以上の男性：25μg</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Calculation;
