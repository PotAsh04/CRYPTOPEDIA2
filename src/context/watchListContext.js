import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export function WatchListContextProvider(props) 
{
    function getLocalStorage() {
        try {
            var localStorageItems = localStorage.getItem('watchList').split(",")
            return localStorageItems
        } catch (error) {
            console.log(error)
        }
        return [
            "bitcoin-cash",
            "litecoin",
            "eos",
            "okb",
            "tezos",
            "cardano",
            "stellar",
            "dai",
        ]
    }
    // localStorage.getItem('watchList').split(",") ||
    const [watchList,setWatchList]=useState(getLocalStorage());
    useEffect(() => {
        localStorage.setItem('watchList',watchList);
    },[watchList])

    function deleteCoin(coin)
    {
        setWatchList(watchList.filter(el=>{
            return el!==coin
        }));

    }
    function addCoin(coin)
    {
        if(watchList.indexOf(coin)===-1)
        {
            setWatchList([...watchList,coin]);
        }
    }


    return(
        <WatchListContext.Provider value={{watchList,deleteCoin,addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
}