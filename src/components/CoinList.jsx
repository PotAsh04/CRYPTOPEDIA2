import React, { useContext, useEffect, useState } from 'react'
import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';
function CoinList() 
{
    const [coins,setCoins]=useState([]);
    const {watchList,deleteCoin}= useContext(WatchListContext);
    const [isLoading,setIsLoading]=useState(false);
    // console.log(watchList);
    useEffect(()=>{
        async function fetchdata()
        {
            setIsLoading(true);
            const response = await coinGecko.get("/coins/markets/",{
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(",")
                }
            })
            setIsLoading(false);
            setCoins(response.data);
        }
        if(watchList.length>0)
            fetchdata();
        else
            setCoins([]);
    },[watchList])

    function renderCoins()
    {
        if(isLoading)
        {
            return <div>Loading........</div>
        }
        return (
            <ul className='coinList list-group mt-2'>
                {coins.map(coin=>{
                    return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                })}
            </ul>
        )
    }

  return (
    <div>{renderCoins()}</div>
  )
}
 
export default CoinList