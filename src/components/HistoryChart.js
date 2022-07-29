import React, { useEffect, useRef, useState } from 'react'
import Chartjs from 'chart.js'
import { chartOptions } from '../chartConfigs/chartConfig';

function HistoryChart({data})
{
  const chartRef=useRef();   //  chartref.current will be used to refer to the canvas
  const { day, week, year, detail } = data;

  const [timeFormat,setTimeFormat]=useState("24h");  
  function determineTimeFormat()
  {
    switch (timeFormat) 
    {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };
  useEffect(() => {
    if (chartRef && chartRef.current && detail) // if chartref exists and details have been parsed
    {
      // console.log("debug3");
      // eslint-disable-line
      const chartInstance = new Chartjs(chartRef.current, 
        {
          type: "line",
          data: {
            datasets: [
              {
                label: `${detail.name} price`,
                data: determineTimeFormat(),
                backgroundColor: "gold",
                borderWidth : 2,
                borderColor: "white",
                pointRadius: .2,
              },
            ],
          },
          options: {
            ...chartOptions,
          },
      });
      console.log(chartInstance);
    }
  });
  
  function showPrice()
  {
    if(detail)
    {
      return(
        <div >
        <li className='coin d-flex '>
            <img className='coinlist-image coindetailimg ' src={detail.image} alt="not found"></img>
            <h2 className='mx-2 my-1 coindetailname' >{detail.name}</h2>
          </li>
          <hr></hr>
          
          <h3 className=" mx-5">&#x20B9; {detail.current_price.toFixed(2)}</h3>
          <h5 className={detail.price_change_24h<0 ? "text-danger my-0 mx-5":"text-success my-0 mx-5"}>
            {detail.price_change_percentage_24h.toFixed(2)}%
          </h5>
        </div>
        )
      
    }
  }

  return (
    <div className="bg-white  mt-2 rounded p-4 coindetailcontainer">
      <div>
        {showPrice()}
      </div>
      <div>
        <canvas ref={chartRef} id='myChart' width={250} height={250}></canvas>
      </div>
      <div className="chart-button mt-1">
        <button
          onClick={() => setTimeFormat("24h")}
          className="btn btn-outline-secondary btn-sm">
          24h
        </button>
        <button
          onClick={() => setTimeFormat("7d")}
          className="btn btn-outline-secondary btn-sm mx-1">
          7d
        </button>
        <button
          onClick={() => setTimeFormat("1y")}
          className="btn btn-outline-secondary btn-sm">
          1y
        </button>
      </div>
    </div>
  )
}

export default HistoryChart