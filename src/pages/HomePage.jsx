import React from 'react';
import CoinList from '../components/CoinList';
import AddCoin from '../components/AddCoin';

function HomePage()
{
  return (
    <div className='homepage mt-2 mb-4 rounded'>
      <div className="coinsummary shadow pl-4 pr-4 pb-2 pt-2 rounded ">
          <AddCoin />
          <CoinList />
      </div>
    </div>
  );
}

export default HomePage