import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinData from '../components/CoinData';
import HistoryChart from '../components/HistoryChart';
import coinGecko from '../apis/coinGecko';

function CoinPage()
{
  var coinid=useParams().id;
  const [coinData,setCoinData]=useState({});
  const [isLoading,setIsLoading]=useState(false);

  // function to convert array of arrays to array of objects for chartjs compatablity
  function formatdata(data)
  {
    return data.map(el => {
      return {
        t:el[0],
        y:el[1].toFixed(2),
      }
    })
  }

  useEffect(()=>{
    async function fetchdata()
    {
      // console.log("debug statement 1");
      setIsLoading(true);
      const [day,week,year,detail]= await Promise.all([
                                        coinGecko.get(`/coins/${coinid}/market_chart/`,{
                                        params: {
                                            vs_currency: "inr",
                                            days: "1"
                                        }
                                        }),
                                        coinGecko.get(`/coins/${coinid}/market_chart/`,{
                                          params: {
                                              vs_currency: "inr",
                                              days: "7"
                                          }
                                        }),
                                        coinGecko.get(`/coins/${coinid}/market_chart/`,{
                                          params: {
                                              vs_currency: "inr",
                                              days: "365"
                                          }
                                        }),
                                        coinGecko.get("/coins/markets/",{
                                          params: {
                                              vs_currency: "usd",
                                              ids: coinid
                                          }
                                        })
                                        ]);
        setCoinData({
                      day:formatdata(day.data.prices ), 
                      week:formatdata(week.data.prices), 
                      year:formatdata(year.data.prices), 
                      detail:(detail.data[0])
                    });
        // console.log(day.data.prices);
        // console.log(coinData.day);
        // console.log("debug statement 2");
        setIsLoading(false);
    }
    fetchdata();
},[])// eslint-disable-line
  if(isLoading)
  return <div></div>
  return (
    <div >
        <HistoryChart data={coinData}></HistoryChart>
        <CoinData details={coinData.detail}></CoinData>
    </div>
  )
}

export default CoinPage