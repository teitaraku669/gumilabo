import React from "react";
import useApi from 'react-use-api'

const Home = () => {
  const [data, { loading, error }, request] = useApi({
    url: 'http://localhost:3000/products.json'
  })

  return (
    <>
      <h1>ぐみらぼ</h1>
      <p>現在登録ぐみ数30件です</p>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      {data && (
        data.map((product) => (
          <div key={product.id}>
            <li>{product.name}</li>
            <li>{product.company}</li>
            <li>{product.price}円</li>
          </div>
        ))
      )}
      <button onClick={request}>Reload</button>
    </>
  );
}

export default Home