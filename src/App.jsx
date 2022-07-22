import React from "react";
import { BrowserRouter, Route  ,Routes} from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import "./App.css"

function App()
{
  return (
    <div className="container">   
      <WatchListContextProvider>
        <BrowserRouter>
          <Header /> 
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route exact path="/coins/:id" element={<CoinPage/>} />
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider> 
    </div>
  )
}
export default App