import React, {Component} from 'react'
import { fetchFactory } from '../../Fetch/fetchFactory'

var globalData, finalGlobalData;
var api = '../assets/global.json';
//var api = 'https://api.coinmarketcap.com/v2/global/';

export class Subheader extends React.Component {
    constructor(props) {
        super(props);
        this.globalDataFetchReq = this.globalDataFetchReq.bind(this);
        this.globalDataFetchReq();

        this.state = {
            finalGlobalData: "",
        }
        
    }

    globalDataFetchReq() {
        fetchFactory(api, 'GET')
            .then((data) => {
                this.showGlobalData(data);
            });
    }

    showGlobalData(res) {
        var data = res.data;
        globalData += `
        <div class="subheader"><ul>
            <li>Cryptocurrencies: ${data.active_cryptocurrencies}</li>
            <li>Markets: ${data.active_markets}</li>
            <li>Market Cap: ${data.quotes.USD.total_market_cap}</li>
            <li>24h Vol: ${data.quotes.USD.total_volume_24h}</li>
            <li>BTC Dominance: ${data.bitcoin_percentage_of_market_cap}%</li>
        </ul></div>`;
        //console.log("subheader::::", globalData);
        finalGlobalData = globalData;

        this.setState({
           finalGlobalData: globalData
        });
    }

    render() {
        return(
        <React.Fragment>
            {/* new feature, don't ned to wrap inside div */}
            <div dangerouslySetInnerHTML={{ __html: finalGlobalData}}></div> 
        </React.Fragment>)
    }


}