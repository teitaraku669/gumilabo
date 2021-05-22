import React from "react";
import useApi from 'react-use-api'

const Home = () => {
  const [data, { loading, error }, request] = useApi({
    url: 'http://localhost:3000/products.json'
  })

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>error</div>}
      {data && (
        <>
          <h1>ぐみらぼ</h1>
          なまえ: {data[0].name}
          <button onClick={request}>Reload</button>
        </>
      )}
    </>
  );
}

export default Home