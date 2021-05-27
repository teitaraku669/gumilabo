import React from "react";
// import useApi from 'react-use-api'

const Home = () => {
  // const [data, { loading, error }, request] = useApi({
  //   url: 'http://localhost:3000/products.json'
  // })
  // {loading && <div>Loading...</div>}
  // {error && <div>error</div>}
  // <button onClick={request}>Reload</button>
  const data = [
    [1,"aaa", "aabbdcc", 500],

  ]
  return (
    <>
      <h1>ぐみらぼ</h1>
      <p>現在登録ぐみ数30件です</p>

      {data && (
        data.map((product) => (
          <div key={product[0]}>
            <li>{product[1]}</li>
            <li>{product[2]}</li>
            <li>{product[3]}円</li>
          </div>
        ))
      )}
    </>
  );
}

export default Home