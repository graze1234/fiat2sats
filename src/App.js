import React from 'react';
import binanceLogo from'./binance.svg';
import coinbaseLogo from './coinbase.svg';
import krakenLogo from './kraken1.svg';
import Nav from './myNav';

class myApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
    this.handleChange = this.handleChange.bind(this);
  }  

  state = {
    isBinanceLoading: true,
    isCoinbaseLoading: true,
    isKrakenLoading: true,
    error: null
  }
  
  formatSats(n) {
    return n.toFixed(2).replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
  }

  handleChange(event) {    
    console.log (event.target.value)
    this.setState({value: event.target.value});  }

  gotoBinance(e){
    e.preventDefault();
    console.log("redirect to binance")
    window.location.replace = "https://www.binance.com";

  }

  componentDidMount() {

    var apiUrl = 'https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => 
        
        this.setState({
          binancePrice: data.price,
          binanceSatsPerDollar: 100000000 / data.price,
          isBinanceLoading: false,
        })
      )
    
      apiUrl = 'https://api.coinbase.com/v2/prices/BTC-USD/buy';

      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          coinbasePrice: data.data.amount,
          coinbaseSatsPerDollar: 100000000 / data.data.amount,
          isCoinbaseLoading: false,
        })
      }
      )
      
      

      apiUrl = 'https://api.kraken.com/0/public/Ticker?pair=BTCUSD';

      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.setState({
          krakenPrice: data.result.XXBTZUSD.a[0],
          krakenSatsPerDollar: 100000000 / data.result.XXBTZUSD.a[0],
          isKrakenLoading: false,
        })
      }
      )


    
    
    
    
    
    }

      

  render() {
  return (
    
    <div>
      <Nav/>
    
    <div className="main-content container flex-1 bg-white px-30 mx-auto">
  <div class="flex flex-wrap">
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
        <div className="bg-gray-100 border-b-4 border-yellow-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
                <div className="flex-1 text-center">
                    <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2 text-center"><img src={binanceLogo} width="200px"/></h5>
                    <h3 className="font-bold text-3xl text-gray-500 py-5">${this.state.value} buys {!this.state.isBinanceLoading ? parseFloat(this.state.binanceSatsPerDollar * this.state.value).toFixed(0) : "loading"} sats</h3>
                    <h3 className="font-bold text-1xl text-gray-600">{!this.state.isBinanceLoading ? parseFloat(this.state.binanceSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                    <h3 className="font-bold text-1xl text-gray-600">BTC ${!this.state.isBinanceLoading ? parseFloat(this.state.binancePrice).toFixed(2) : "loading"}</h3>
                    
                    <div class="card-body p-4">
                		  <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Binance</button>
	                  </div>
                </div>
            </div>
        </div>
        
    </div>  
  
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
          <div className="bg-gray-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                  <div className="flex-1 text-center">
                      <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2"><img src={coinbaseLogo} width="200px"/></h5>
                      <h3 className="font-bold text-3xl text-gray-600 py-5">${this.state.value} buys {!this.state.isCoinbaseLoading ? parseFloat(this.state.coinbaseSatsPerDollar * this.state.value).toFixed(0) : "loading"} sats</h3>
                      <h3 className="font-bold text-1xl text-gray-600">{!this.state.isCoinbaseLoading ? parseFloat(this.state.coinbaseSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                      <h3 className="font-bold text-1xl text-gray-600">BTC ${!this.state.isCoinbaseLoading ? parseFloat(this.state.coinbasePrice).toFixed(2) : "loading"}</h3>
                      <div class="card-body p-4">
                  		  <button onClick={this.gotoBinance} type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Coinbase</button>
  	                  </div>


                  </div>
              </div>
          </div>
          
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
                    <div className="bg-gray-100 border-b-4 border-purple-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-center">
                                <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2"><img src={krakenLogo} width="200px"/></h5>
                                <h3 className="font-bold text-3xl text-gray-600 py-3">${this.state.value} buys {!this.state.isKrakenLoading ? parseFloat(this.state.krakenSatsPerDollar * this.state.value).toFixed(0)  : "loading"} sats</h3>
                                <h3 className="font-bold text-1xl text-gray-600">{!this.state.isKrakenLoading ? parseFloat(this.state.krakenSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                                <h3 className="font-bold text-1xl text-gray-600">BTC ${!this.state.isKrakenLoading ? parseFloat(this.state.krakenPrice).toFixed(2) : "loading"}</h3>
                                <div class="card-body p-4">
                  		            <button type="button" class="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Kraken</button>
  	                            </div>

                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="container text-center mx-auto py-10">
        <div className="bg-white p-4 text-2xl text-gray text-center">
            <h1 className="font-normal text-gray-500 pl-10 text-2xl text-center">I want to buy <span className="shadow">$<input type="text" value={this.state.value} onChange={this.handleChange} size="2" maxLength="6" /></span> of Bitcoin(BTC)</h1>
        </div>
    </div>

  
  </div>
    </div>
    </div>
  )
  }
}




export default myApp;
