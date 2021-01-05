import React from 'react';
import dollarLogo from'./dollar.svg';
import btcAddress from'./btc-address.png';
import bitcoinLogo from'./bitcoin.svg';



class About extends React.Component {


    render(){


        return(


<div className="container mx-auto flex flex-wrap">
    
<div className="container text-left mx-auto py-5">
        <div className="bg-white text-2xl text-gray text-left py-5">
            <h1 className="font-normal text-gray-700 text-5xl text-left">About</h1>
        
        </div>
        <p className="py-2">Fiat2Sats was set up to help people either wanting to buy a little Bitcoin and start "stacking sats" or those looking to accept Bitcoin as payment for some priced in fiat.</p>
        
        <p className="py-2">It's supported by affiliate links to the exchanges listed and by your kind donations if you find the service useful.</p>
        
    </div>
</div>
                  



        )
    }
}


export default About;
    
