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
    ["UHA味覚糖", "さけるグミ", "巨峰", "https://www.uha-mikakuto.co.jp/sakeru/"],
    ["UHA味覚糖", "さけるグミ", "コーラ", "https://www.uha-mikakuto.co.jp/sakeru/"],
    ["UHA味覚糖", "なが〜いさけるグミ", "巨峰", "https://www.uha-mikakuto.co.jp/sakeru/"], 
    ["UHA味覚糖", "UHAグミサプリ", "めぐみアイ", "http://gummy-supple.com/lineup/megumiai.php"],
    ["UHA味覚糖", "UHAグミサプリ", "鉄＆葉酸", "http://gummy-supple.com/lineup/age_folate.php"],
    ["UHA味覚糖", "UHAグミサプリ", "亜鉛", "http://gummy-supple.com/lineup/zinc.php"],
  ]
  return (
    <>
      <h1 className={HomeCss.title}>ぐみらぼ</h1>
      <div className={HomeCss.count}>現在登録ぐみ数 {data.length} 件です</div>
      <div className={HomeCss.product_list}>
      {data && (
        data.map((product, index) => (
          <a href={product[3]} target="_blank" rel="noopener noreferrer">
          <div key={index} className={HomeCss.product}>
            <li>{product[0]}</li>
            <li>{product[1]}</li>
            <li>{product[2]}</li>
          </div>
          </a>
        ))
      )}
      </div>
    </>
  );
}

export default Home