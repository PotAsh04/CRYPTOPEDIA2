import React from 'react'
import { Link } from 'react-router-dom'

function Coin({coin , deleteCoin}){
  return (
    <Link to={`/coins/${coin.id}`}>
      <li className='coin coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark'>
            <span className='text-decoration-none'>
             <img className='coinlist-image mx-1' src={coin.image} alt={"not found"}></img>
             {/* {coin.name} */}
            </span>
            
            <span className='text-decoration-none'>&#x20B9; {coin.current_price}</span>
            <span className={ coin.price_change_percentage_24h>0 ? "text-success mr-2":"text-danger mr-2" }>
                {" "}
                {coin.price_change_percentage_24h < 0 ? (
                    <i className="fas fa-sort-down align-middle mr-1"></i>
                ) : (
                    <i className="fas fa-sort-up align-middle mr-1"></i>
                )}
                {coin.price_change_percentage_24h}
            </span>

            <i onClick={(e)=>{
                e.preventDefault();
                deleteCoin(coin.id);
            }} className="delete-icon far fa-times-circle text-danger"></i>
        </li>
    </Link>
  )
}

export default Coin