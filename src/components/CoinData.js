import React from 'react'

function CoinData({details})
{
  function showdata()
  {
    if (details) 
    {
      return (
        <div className="bg-white  mb-3 mt-2 p-2 rounded  row coindetailcontainer">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">Market Cap</span>
              <span>{details.market_cap}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">
                Total Supply
              </span>
              <span>{details.total_supply}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">Volume(24H)</span>
              <span>{details.total_volume}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">high 24h</span>
              <span>{details.high_24h}</span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">
                Circulating Supply
              </span>
              <span>{details.circulating_supply}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category font-weight-bold">low 24h</span>
              <span>{details.low_24h}</span>
            </div>
          </div>
        </div>
      );
    }
    else
    return <div>no data available</div>
  };
  return <div>{showdata()}</div>;
}
export default CoinData