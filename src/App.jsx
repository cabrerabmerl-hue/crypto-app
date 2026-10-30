import {useState, useEffect} from "React"
const API_url  = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&'

import CoinCard from from "./components/CoinCard"

function app() {
  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)


//When app mounts
useEffect(() => {
     fetch(API_URL)
    .then((res) => {
     if(!res.ok) throw new Error('fail to fetch data')
    })
    .then((data) => {
   console.log(data)
     setCoins(data)
     setLoading(false)
    })
  .catch((err) => {
    setError(err.message)
    setLoading
    })
  }, [])

  return (
    <div>
      <h1>crypto app</h1>
      {loading && <p>loading...</p>}
      {error && <div className="error"> {error}</div>}
      {eror}



  
    