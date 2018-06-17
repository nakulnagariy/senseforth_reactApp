import React, {Component} from 'react';
import { fetchFactory } from '../Fetch/fetchFactory'

var listingData, finalListingData;

var api = './assets/listing.json';
//var api = 'https://api.coinmarketcap.com/v2/listings/';

export class Listing extends React.Component {
    constructor(props) {
        super(props);

        this.listingDataFetchReq = this.listingDataFetchReq.bind(this);
        this.listingDataFetchReq();

        this.state = {
            finalListingData: "",
        }
    }

    listingDataFetchReq() {
        fetchFactory(api, 'GET')
            .then((data) => {
                this.showListingData(data);
            });
    }

    showListingData(res) {
        listingData += `
            <table id="batters" name="batters" class="my-5 table table-bordered table-hover">
            <caption>Data from listing API</caption>
            <th>#</th>
            <th>Id</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>website_slug</th>
            <tbody id="batters_body">`;

            var data = res.data;
            for(var i = 0; i < 10; i++) {
                listingData += `
                    <tr>
                        <td>${[i + 1]}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].symbol}</td>
                        <td>${data[i].website_slug}</td>
                    </tr>
                `;}
            listingData += `</tbody></table>`;
            
            //finalListingData = listingData;
            //console.log('listingData::', listingData);

            this.setState({
                finalListingData: listingData
                });
        }
    render() {
        return(<div>
                <div dangerouslySetInnerHTML={{ __html: finalListingData}}></div> 
            </div>
        )
    } 
}