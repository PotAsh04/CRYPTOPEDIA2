import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

function AddCoin()
{
  const [isActive, setIsActive] = useState(false);
  const {addCoin,watchList}=useContext(WatchListContext);
  const availableCoins = [
    "solana",
    "polkadot",
    "tron",
    "dogecoin",        
    "bitcoin",
    "ethereum",
    "ripple",
    "tether",
  ];
  // console.log("debug4");
  // const updatedWatchList=availableCoins;
  // const updatedWatchList = availableCoins.filter(coin => !watchList.includes(coin))
  function handleClick(coiname)
  {
    addCoin(coiname);
    setIsActive(false);
  }
  // console.log("debug5");
  return (
    <div className="dropdown mb-3">
      <button
        onClick={() => setIsActive(!isActive)}
        className="btn btn-primary dropdown-toggle"
        type="button"
      >
      Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {/* {updatedWatchList.map((el) => { */}
        {availableCoins.map((el) => {
          return (
            <a
              onClick={() => handleClick(el)}
              href="#"
              className="dropdown-item"
            >
              {el}
            </a>
          );
        })}
      </div>
    </div>
  )
};

export default AddCoin