import React from "react";
import HomeCss from './Home.module.css';
// import useApi from 'react-use-api'

const Home = () => {
  // const [data, { loading, error }, request] = useApi({
  //   url: 'http://localhost:3000/products.json'
  // })
  // {loading && <div>Loading...</div>}
  // {error && <div>error</div>}
  // <button onClick={request}>Reload</button>
  const data = [
    ["UHA味覚糖", "コロロ", "コーラ", "http://uha-cororo.jp/"],
    ["UHA味覚糖", "コロロ", "ソーダ", "http://uha-cororo.jp/"],
    ["UHA味覚糖", "コロロ", "グレープ", "http://uha-cororo.jp/"],
    ["UHA味覚糖", "コロロ", "マスカット", "http://uha-cororo.jp/"],
    ["UHA味覚糖", "シゲキックス", "グレープ", "http://shigekix.com/products/shigekix-kyun.html"],
    ["UHA味覚糖", "シゲキックス", "ソーダ", "http://shigekix.com/products/shigekix-original.html"],
    ["UHA味覚糖", "シゲキックス", "エボリューションソーダ", "http://shigekix.com/products/shigekix-original5.html"],
    ["UHA味覚糖", "激シゲキックス", "マスカット", "http://shigekix.com/products/geki-shigekix-whitesoda.html"],
    ["UHA味覚糖", "カゲキックス", "マスカット", "http://shigekix.com/products/kagekix.html"],
    ["UHA味覚糖", "コグミ", "果汁系", "https://www.uha-mikakuto.co.jp/kogumi/"],
    ["UHA味覚糖", "コグミ", "ソーダ系", "https://www.uha-mikakuto.co.jp/kogumi/"],
    ["UHA味覚糖", "コグミ", "ビタミン系", "https://www.uha-mikakuto.co.jp/kogumi/"],
    ["UHA味覚糖", "さけるグミ", "巨峰", "https://www.uha-mikakuto.co.jp/sakeru/"],
    ["UHA味覚糖", "さけるグミ", "コーラ", "https://www.uha-mikakuto.co.jp/sakeru/"],
    ["UHA味覚糖", "なが〜いさけるグミ", "巨峰", "https://www.uha-mikakuto.co.jp/sakeru/"], 
    ["UHA味覚糖", "UHAグミサプリ", "めぐみアイ", "http://gummy-supple.com/lineup/megumiai.php"],
    ["UHA味覚糖", "UHAグミサプリ", "還元型コエンザイムQ10", "http://gummy-supple.com/lineup/coenzaimu.php"],
    ["UHA味覚糖", "UHAグミサプリ", "Ca鉄", "http://gummy-supple.com/lineup/kids_ca_fe.php"],
    ["UHA味覚糖", "UHAグミサプリ", "DHA", "http://gummy-supple.com/lineup/kids_dha.php"],
    ["UHA味覚糖", "UHAグミサプリ", "肝油", "http://gummy-supple.com/lineup/kids_kanyu.php"],
    ["UHA味覚糖", "UHAグミサプリ", "マルチビタミン", "http://gummy-supple.com/lineup/multi_vitamin.php"],
    ["UHA味覚糖", "UHAグミサプリ", "ビタミンC", "http://gummy-supple.com/lineup/vitamin_c.php"],
    ["UHA味覚糖", "UHAグミサプリ", "ビタミンD3", "http://gummy-supple.com/lineup/vitamin_d3.php"],
    ["UHA味覚糖", "UHAグミサプリ", "鉄＆葉酸", "http://gummy-supple.com/lineup/age_folate.php"],
    ["UHA味覚糖", "UHAグミサプリ", "鉄", "http://gummy-supple.com/lineup/age.php"],
    ["UHA味覚糖", "UHAグミサプリ", "亜鉛", "http://gummy-supple.com/lineup/zinc.php"],
    ["UHA味覚糖", "UHAグミサプリ", "亜鉛&マカ", "http://gummy-supple.com/lineup/zinc-maka.php"],
    ["UHA味覚糖", "UHAグミサプリ", "カルシウム", "http://gummy-supple.com/lineup/calcium.php"],
    ["UHA味覚糖", "UHAグミサプリ", "ルテイン", "http://gummy-supple.com/lineup/lutein.phpp"],
    ["UHA味覚糖", "UHAグミサプリ", "ブルーベリー", "http://gummy-supple.com/lineup/blueberry.php"],
    ["UHA味覚糖", "UHAグミサプリ", "葉酸", "http://gummy-supple.com/lineup/folate.php"],
    ["UHA味覚糖", "UHAグミサプリ", "大豆イソフラボン", "http://gummy-supple.com/lineup/daizu_isoflavone.php"],
    ["UHA味覚糖", "UHAグミサプリ", "コラーゲン", "http://gummy-supple.com/lineup/collagen.php"],
    ["UHA味覚糖", "UHAグミサプリ", "DHA&EPA", "http://gummy-supple.com/lineup/dha_epa.php"],
  ]
  return (
    <>
      <div className={HomeCss.title}>ぐみらぼ</div>
      <div className={HomeCss.count}>現在登録ぐみ数 {data.length} 件です</div>
      <div className={HomeCss.product_list}>
      {data && (
        data.map((product, index) => (
          <a href={product[3]} target="_blank" rel="noopener noreferrer">
          <div key={index} className={HomeCss.product}>
            {product[0]}<br/>
            {product[1]}<br/>
            {product[2]}<br/>
          </div>
          </a>
        ))
      )}
      </div>
    </>
  );
}

export default Home