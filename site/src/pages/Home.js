import React, { useState } from "react";
import HomeCss from './Home.module.css';
import { useS3 } from '../hooks/useS3.js'
import { convertCSVToArray } from 'convert-csv-to-array';
// import useApi from 'react-use-api'

const Home = () => {
  // const [data, { loading, error }, request] = useApi({
  //   url: 'http://localhost:3000/products.json'
  // })
  // {loading && <div>Loading...</div>}
  // {error && <div>error</div>}
  // <button onClick={request}>Reload</button>

  const data = useS3();

  const [gumiData, setGumiData] = useState([])

  if (data && gumiData.length <= 0) {
    setGumiData(convertCSVToArray(data.Body.toString("utf-8"), {
      header: false,
      type: 'object',
      separator: '\t',
    }))
  }

  const companys = ["なし", "UHA味覚糖", "カバヤ", "カンロ", "明治"]
  const [selectedConpany, setSelectedConpany] = useState(companys[0])

  const ConpanyOptions = () => (
    <>
      {companys.map((company, index) => (
        <option value={company} key={index}>{company}</option>
      ))}
    </>
  )

  const onCampanyChange = (event) => {
    if (event.target.value === "なし") {
      setGumiData(gumiData)
    } else {
      setGumiData(gumiData.filter(gumi => gumi[0] === event.target.value))
    }
    setSelectedConpany(event.target.value);
  }

  return (
    <>
      <div className={HomeCss.title}>ぐみらぼ</div>
      <div className={HomeCss.count}>現在登録ぐみ数 {gumiData.length} 件です</div>
      <select className={HomeCss.select_conpany} value={selectedConpany} onChange={(event) => onCampanyChange(event)}>
        <ConpanyOptions />
      </select>
      <div className={HomeCss.product_list}>
        {gumiData && (
          gumiData.map((product, index) => (
            <a key={index} href={product.id} target="_blank" rel="noopener noreferrer">
              <div className={HomeCss.product}>
                {product.company}<br />
                {product.product}<br />
                {product.type}<br />
              </div>
            </a>
          ))
        )}
      </div>
    </>
  );
}

export default Home