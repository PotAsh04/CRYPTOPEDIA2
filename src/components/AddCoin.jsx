import React, { useState, useContext } from "react";
import { WatchListContext } from "../context/watchListContext";

function AddCoin()
{
  const [isActive, setIsActive] = useState(false);
  const {addCoin,watchList}=useContext(WatchListContext);
  const availableCoins = [
    "bitcoin-cash",
    "litecoin",
    "eos",
    "okb",
    "tezos",
    "cardano",
    "bitcoin",
    "ethereum",
    "dai",
    "solana",
    "polkadot",
    "tron",
    "dogecoin",        
    "ripple",
    "tether",
    "wazirx",
    "web3",
    "binancecoin",
    "cardano",
    "stellar",
    "shiba-inu",
  ];
  availableCoins.sort();
  const updatedWatchList = availableCoins.filter(coin => !watchList.includes(coin))
  updatedWatchList.sort();
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
        className="btn btn-primary dropdown-toggle btn1"
        type="button"
      >
      Add Coin
      </button>
      <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
        {/* {availableCoins.map((el) => { */}
        {updatedWatchList.map((el) => {
          return (
            <a key={el}
              onClick={() => handleClick(el)}
              href="/#"
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