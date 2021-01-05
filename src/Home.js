import React from 'react';
import dollarLogo from'./dollar.svg';
import bitcoinLogo from'./bitcoin.svg';
import binanceLogo from'./binance.svg';
import coinbaseLogo from './coinbase.svg';
import krakenLogo from './kraken1.svg';
import { Link, Route } from 'react-router-dom'


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 10};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeFiatPayment = this.handleChangeFiatPayment.bind(this);
        this.gotoBinance = this.gotoBinance.bind(this);
        
        this.loadBinanceData = this.loadBinanceData.bind(this);
        this.loadCoinbaseData = this.loadCoinbaseData.bind(this);
        this.loadKrakenData = this.loadKrakenData.bind(this);
      
      }  
    
      state = {
        isBinanceLoading: true,
        isCoinbaseLoading: true,
        isKrakenLoading: true,
        error: null
      }
      
      numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    
    
      handleChange(event) {    
        console.log (event.target.value)
        this.setState({value: event.target.value});  }
    
    
        handleChangeFiatPayment(event) {    
          console.log (event.target.value)
          this.setState({paymentvalue: event.target.value});  }
      
      
    
        
      gotoBinance(e){
        e.preventDefault();
        //console.log("redirect to binance")
        window.location.href = "https://www.binance.com";
        
      }
    
      gotoCoinbase(e){
        e.preventDefault();
        //console.log("redirect to coinbase")
        window.location.href = "https://www.coinbase.com";
        
      }
    
      gotoKraken(e){
        e.preventDefault();
        //console.log("redirect to kraken")
        window.location.href = "https://www.kraken.com";
        
      }
    
    
      async loadBinanceData() {
        try {
          const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
          const thisBinanceData = await res.json();
          //console.log(thisBinanceData.price)
          
          this.setState({
            binancePrice: thisBinanceData.price,
            binanceSatsPerDollar: 100000000 / thisBinanceData.price,
            isBinanceLoading: false,
          })

        } catch (e) {
          console.log(e);
      }
      
      }

      async loadCoinbaseData() {
        try {
          const res = await fetch('https://api.coinbase.com/v2/prices/BTC-USD/buy');
          const thisCoinbaseData = await res.json();
          console.log(thisCoinbaseData)
          
          this.setState({
            coinbasePrice: thisCoinbaseData.data.amount,
            coinbaseSatsPerDollar: 100000000 / thisCoinbaseData.data.amount,
            isCoinbaseLoading: false,
            })

        } catch (e) {
          console.log(e);
      }
      
      }

      async loadKrakenData() {
        try {
          const res = await fetch('https://api.kraken.com/0/public/Ticker?pair=BTCUSD');
          const thisKrakenData = await res.json();
          //console.log(thisKrakenData.result.XXBTZUSD.a[0])
          
          this.setState({
            krakenPrice: thisKrakenData.result.XXBTZUSD.a[0],
            krakenSatsPerDollar: 100000000 / thisKrakenData.result.XXBTZUSD.a[0],
            isKrakenLoading: false,
            })

        } catch (e) {
          console.log(e);
      }
      
      }      












      componentWillUnmount() {
        clearTimeout(this.loadBinanceData);
        clearTimeout(this.loadCoinbaseData);
        clearTimeout(this.loadKrakenData);
      }
    
      componentDidMount() {
       
        this.loadBinanceData();
        setInterval(this.loadBinanceData, 3100);


        this.loadCoinbaseData();
        setInterval(this.loadCoinbaseData, 3200);

        this.loadKrakenData();
        setInterval(this.loadKrakenData, 3000);


        var apiUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
    
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
            //console.log(data)
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
            //console.log(data)
            this.setState({
              krakenPrice: data.result.XXBTZUSD.a[0],
              krakenSatsPerDollar: 100000000 / data.result.XXBTZUSD.a[0],
              isKrakenLoading: false,
            })
          }
          
          
          
          
          )
    
    
        
        
        
        
        
        }
    


    render(){


        return(


<div className="container mx-auto flex flex-wrap">
    
<div className="container text-center mx-auto py-5">
                  <div className="bg-white p-4 text-2xl text-gray text-center">
                  <h1 className="font-normal text-gray-700 pl-10 text-5xl text-center">I want to buy <span className="">$<input type="text" className="shadow bg-yellow-200 border-b-5 border-gray-700" value={this.state.value} onChange={this.handleChange} size="2" maxLength="6" /></span> of Bitcoin(BTC)</h1>
                  
                  </div>
              </div>

    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
        <div className="bg-gray-100 border-b-4 border-yellow-500 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
                <div className="flex-1 text-center">
                    <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2 text-center"><img src={binanceLogo} alt="Binance" width="200px"/></h5>
                    <h3 className="font-bold text-3xl text-gray-600 py-5">${this.numberWithCommas(this.state.value)} buys {!this.state.isBinanceLoading ? this.numberWithCommas(parseFloat(this.state.binanceSatsPerDollar * this.state.value).toFixed(0)) : "loading"} sats</h3>
                    <h3 className="font-bold text-1xl text-gray-400">{!this.state.isBinanceLoading ? parseFloat(this.state.binanceSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                    <h3 className="font-bold text-1xl text-gray-400">BTC ${!this.state.isBinanceLoading ? this.numberWithCommas(parseFloat(this.state.binancePrice).toFixed(2)) : "loading"}</h3>
                    
                    <div className="card-body p-4">
                		  <button onClick={this.gotoBinance} type="button" className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Binance</button>
	                  </div>
                </div>
            </div>
        </div>
        
    </div>  
  
    <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
          <div className="bg-gray-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                  <div className="flex-1 text-center">
                      <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2"><img src={coinbaseLogo} alt="Coinbase" width="200px"/></h5>
                      <h3 className="font-bold text-3xl text-gray-600 py-5">${this.numberWithCommas(this.state.value)} buys {!this.state.isCoinbaseLoading ? this.numberWithCommas(parseFloat(this.state.coinbaseSatsPerDollar * this.state.value).toFixed(0)) : "loading"} sats</h3>
                      <h3 className="font-bold text-1xl text-gray-400">{!this.state.isCoinbaseLoading ? parseFloat(this.state.coinbaseSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                      <h3 className="font-bold text-1xl text-gray-400">BTC ${!this.state.isCoinbaseLoading ? this.numberWithCommas(parseFloat(this.state.coinbasePrice).toFixed(2)) : "loading"}</h3>
                      <div className="card-body p-4">
                  		  <button onClick={this.gotoCoinbase} type="button" className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Coinbase</button>
  	                  </div>


                  </div>
              </div>
          </div>
          
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    
                    <div className="bg-gray-100 border-b-4 border-purple-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-1 text-center">
                                <h5 className="font-bold text-4xl uppercase text-gray-600 container px-20 py-2"><img src={krakenLogo} alt="Kraken" width="200px"/></h5>
                                <h3 className="font-bold text-3xl text-gray-600 py-3">${this.numberWithCommas(this.state.value)} buys {!this.state.isKrakenLoading ? this.numberWithCommas(parseFloat(this.state.krakenSatsPerDollar * this.state.value).toFixed(0))  : "loading"} sats</h3>
                                <h3 className="font-bold text-1xl text-gray-400">{!this.state.isKrakenLoading ? parseFloat(this.state.krakenSatsPerDollar/100000000 * this.state.value).toFixed(8) : "loading"} BTC</h3>
                                <h3 className="font-bold text-1xl text-gray-400">BTC ${!this.state.isKrakenLoading ? this.numberWithCommas(parseFloat(this.state.krakenPrice).toFixed(2)) : "loading"}</h3>
                                <div className="card-body p-4">
                  		            <button onClick={this.gotoKraken} type="button" className="btn-primary transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 mr-1 rounded">Go to Kraken</button>
  	                            </div>

                            </div>
                        </div>
                    </div>
                    
      </div>
      
      


              <div className="container text-left mx-auto py-10">
                  <div className="bg-white p-4 text-normal text-gray text-left px-50">
                  <h3 className="font-normal text-gray-700 py-10 text-2xl text-left">Common questions:</h3>
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <details className="mb-4">
                            <summary className="font-normal bg-gray-200 rounded-md text-gray-700 py-2 px-4">
                            what is a sat?
                            </summary>
                            <span className="font-normal text-gray-700 pl-10 text-normal text-center">
                            A sat, or satoshi, is the smallest demonination of Bitcoin. It's named after Sataoshi Nakamoto the annoymous creator of Bitcoin - there are 100 million satoshi's in a Bitcoin.
                            </span>
                            </details>
                        </div>
                        <div>
                            <details className="mb-4">
                            <summary className="font-normal bg-gray-200 rounded-md text-gray-700 py-2 px-4">
                            can I buy part of a Bitcoin?
                            </summary>
                            <span className="font-normal text-gray-700 pl-10 text-normal text-center">
                            Yes you can by a fraction of a Bitcoin - in fact those are the vast majority of purchases.
                            </span>
                            </details>
                        </div>                        
                        <div>
                            <details className="mb-4">
                            <summary className="font-normal bg-gray-200 rounded-md text-gray-700 py-2 px-4">
                            where can I buy Bitcoin?
                            </summary>
                            <span className="font-normal text-gray-700 pl-10 text-normal text-center">
                            My personal preferences are the three options above - kraken, binance and coinbase. 
                            </span>
                            </details>
                        </div>
                        <div>
                            <details className="mb-4">
                            <summary className="font-normal bg-gray-200 rounded-md text-gray-700 py-2 px-4">
                            what is stacking sats?
                            </summary>
                            <span className="font-normal text-gray-700 pl-10 text-normal text-center">
                            Stacking sats refers to simply building your collection of sats over time. You could choose to automate purchases with small regular amounts, both <a href="https://www.coinbase.com/" className="underline hover:text-black hover:underline">coinbase</a> and <a href="https://www.swanbitcoin.com/" className="underline hover:text-black hover:underline">swanbitcoin</a> (us only) offer that as an option - or just buy sats when you can.
                            </span>
                            </details>
                        </div>
                        <div>
                            <details className="mb-4">
                            <summary className="font-normal bg-gray-200 rounded-md text-gray-700 py-2 px-4">
                            where can I learn more about Bitcoin?
                            </summary>
                            <span className="font-normal text-gray-700 pl-10 text-normal text-center">
                            We've listed some of our favorite resources to get you started on our <Link to="/resources" className="underline hover:text-black hover:underline">resources</Link> page.
                            </span>
                            </details>
                        </div>                        
                  </div>
                </div>
              </div>


</div>



        )
    }
}


export default Home;
    
