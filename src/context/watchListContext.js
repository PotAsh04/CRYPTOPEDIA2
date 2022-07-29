import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export function WatchListContextProvider(props) 
{
    function getLocalStorage() 
    {
        try 
        {
            var localStorageItems = localStorage.getItem('watchList').split(",")
            localStorageItems.sort();
            return localStorageItems
        } catch (error) 
        {
            console.log(error)
        }
        const a = [
            "bitcoin-cash",
            "litecoin",
            "eos",
            "okb",
            "tezos",
            "cardano",
            "bitcoin",
            "ethereum",
            "dai",
        ]
        a.sort();
        return a;
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
        watchList.sort();
    }
    function addCoin(coin)
    {
        if(watchList.indexOf(coin)===-1)
        {
            setWatchList([...watchList,coin]);
            watchList.sort();
        }
    }


    return(
        <WatchListContext.Provider value={{watchList,deleteCoin,addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
}