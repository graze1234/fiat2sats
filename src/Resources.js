import React from 'react';
import dollarLogo from'./dollar.svg';
import bitcoinLogo from'./bitcoin.svg';



class Resources extends React.Component {


    render(){


        return(


<div className="container mx-auto flex flex-wrap px-10">
    
    <div className="container text-left mx-auto py-5">
        <div className="bg-white text-2xl text-gray text-left py-5 ">
        <h1 className="font-normal text-gray-700 text-5xl text-left">Resources</h1>
        
        </div>
        <p className="py-2">It's hard to know where to start with bitcoin resources due to there being so much out there now. This list is just a starting point to hopefully help someone new to Bitcoin to find some decent trustworthy resources.</p>
        <p className="py-2">Be aware there are lots of scams out there - if it sounds too good to be true it probably is - protect your private keys / seed phrases.</p>
        <p className="py-2">Below are some of the resources I've found most useful, and still read / listen to on a regular basis.</p>
        <p className="py-2">Get in touch on twitter if there's something you think should be added.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Bitcoin core original stuff</h2>    
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://www.bitcoin.org">Bitcoin.org</a></li>
                    <li><a className="underline hover:no-underline" href="https://github.com/bitcoin/bitcoin/">Bitcoin github</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Bitcoin twitter</h2>
                
                
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/lopp">Jamerson Lopp</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/danheld">Dan Help</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/aantonop">Andreas M. Antonopoulos</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/woonomic">Willy Woo</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/PeterMcCormack">Peter McCormack</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/100trillionUSD">Plan B</a></li>
                    <li><a className="underline hover:no-underline" href="https://twitter.com/brucefenton">Bruce Fenton</a></li>

                
                    </ul>
                </div>
            </div>

            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Podcasts</h2>
                
                
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://www.whatbitcoindid.com/">What bitcoin did - Peter McCormack</a></li>
                    <li><a className="underline hover:no-underline" href="https://open.spotify.com/show/7v3JVAhRtnWOgT319NFD0A">Profit Maximalist - Luke Martin</a></li>
                    <li><a className="underline hover:no-underline" href="https://stephanlivera.com/">Stephan Liverna Podcast</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">News</h2>
                
                
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://www.coindesk.com/">Coin desk</a></li>
                    <li><a className="underline hover:no-underline" href="https://cointelegraph.com/">Coin telegraph</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.coincenter.org/">Coin center</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Market Data</h2>
                
                
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://messari.io/">Messari</a></li>
                    <li><a className="underline hover:no-underline" href="https://coinmarketcap.com/">Coinmarketcap</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.coingecko.com/en">Coingecko</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.cryptocompare.com/">Crypto compare</a></li>        
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Articles</h2>
                
                
                    <p className="py-2">A few, mostly bullish, articles that I've enjoyed. </p>
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1">Vijay Boyapati - the bullish case for Bitcoin</a></li>
                    <li><a className="underline hover:no-underline" href="https://medium.com/@100trillionUSD/bitcoin-stock-to-flow-cross-asset-model-50d260feed12">Plan B - stock to flow cross asset</a></li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Books</h2>
                
                
                    <p className="py-2">These are a few of the books I read when I started wanting to understand more about Bitcoin and crypto in general - there are of course others - but these are a good start :)</p>
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://www.amazon.co.uk/Bitcoin-Standard-Decentralized-Alternative-Central-ebook/dp/B07BPM3GZQ/ref=msx_wsirn_v1_2/258-4451247-0578552?_encoding=UTF8&pd_rd_i=B07BPM3GZQ&pd_rd_r=91f7de9b-59bb-4576-a5fe-2700cb2d508c&pd_rd_w=57BD5&pd_rd_wg=7pQMK&pf_rd_p=e5eb819b-7287-48fe-800f-c0dd207121a9&pf_rd_r=BKTYRT2SX3BW0RQY3Z75&psc=1&refRID=BKTYRT2SX3BW0RQY3Z75">The Bitcoin Standard</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.amazon.co.uk/Mastering-Bitcoin-Programming-Open-Blockchain-ebook/dp/B071K7FCD4/ref=reads_cwrtbar_2/258-4451247-0578552?_encoding=UTF8&pd_rd_i=B071K7FCD4&pd_rd_r=4d264460-7df0-41db-8484-1444668c914c&pd_rd_w=9ynkn&pd_rd_wg=b4U0a&pf_rd_p=0d3720dd-81df-41f8-9395-840632d2172a&pf_rd_r=AC7X8G2FJGKPGW9QW0A7&psc=1&refRID=AC7X8G2FJGKPGW9QW0A7">Mastering Bitcoin</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.amazon.co.uk/Internet-Money-Andreas-M-Antonopoulos-ebook/dp/B01L9WM0H8/ref=reads_cwrtbar_3/258-4451247-0578552?_encoding=UTF8&pd_rd_i=B01L9WM0H8&pd_rd_r=674d93b9-5df2-4d85-854e-a8194116c14c&pd_rd_w=VUA7x&pd_rd_wg=0hvX4&pf_rd_p=0d3720dd-81df-41f8-9395-840632d2172a&pf_rd_r=Y02TZN0MJFQSDSW63N9W&psc=1&refRID=Y02TZN0MJFQSDSW63N9W">The Internet of Money</a></li>
                    <li><a className="underline hover:no-underline" href="https://www.amazon.co.uk/Cryptoassets-Innovative-Investors-Bitcoin-Beyond-ebook/dp/B0743MPV9R/ref=reads_cwrtbar_7?_encoding=UTF8&pd_rd_i=B0743MPV9R&pd_rd_r=674d93b9-5df2-4d85-854e-a8194116c14c&pd_rd_w=VUA7x&pd_rd_wg=0hvX4&pf_rd_p=0d3720dd-81df-41f8-9395-840632d2172a&pf_rd_r=Y02TZN0MJFQSDSW63N9W&psc=1&refRID=Y02TZN0MJFQSDSW63N9W">Crypto Assets</a></li>
                    
                    </ul>
                </div>
            </div>
            <div className="bg-gray-100 border-b-2 border-yellow-500 rounded-lg">
                <div className="py-5 px-10">
                    <h2 className="font-normal text-gray-700 text-3xl text-left py-1">Others</h2>
                
                
                    <ul>
                    <li><a className="underline hover:no-underline" href="https://lopp.net">Lopp.net</a></li>
                    <li><a className="underline hover:no-underline" href="https://aantonop.com/workshops/">Andreas workshops</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>



        )
    }
}


export default Resources;
    
