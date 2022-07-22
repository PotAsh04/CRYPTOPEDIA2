import React, { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();

export function WatchListContextProvider(props) 
{
    const [watchList,setWatchList]=useState(
        localStorage.getItem('watchList').split(",") ||
        [
            "bitcoin-cash",
            "litecoin",
            "eos",
            "okb",
            "tezos",
            "cardano",
            "stellar",
            "dai",
            "leo"            
        ]);

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