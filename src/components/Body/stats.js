import React, {Component} from 'react';
import { fetchFactory } from '../Fetch/fetchFactory';

var battersData, finalBattersData;

export class Body extends React.Component {
    constructor(props) {
        super(props);
        this.battersDataFetchReq = this.battersDataFetchReq.bind(this);
        this.battersDataFetchReq();

        this.state = {
            finalBattersData: "",
        };
    }

//ajax request
battersDataFetchReq () {
    fetchFactory('./assets/some.json', 'GET')
        .then((data) => {  
            this.showBattersData(data);
            // this.showToppingData(data);
        })
}   

showBattersData(res) {   
    //alert('in...');
    battersData = `
            <table id="batters" name="batters" class="my-5 table table-bordered table-hover">
            <caption>List of batters</caption>
            <th>#</th>
            <th>Id</th>
            <th>Type</th>
            <tbody id="batters_body">`;
           var data = res.batters.batter;
            for(var i = 0; i < data.length; i++) {
                battersData += `
                    <tr>
                        <td>${[i + 1]}</td>
                        <td>${data[i].id}</td>
                        <td>${data[i].type}</td>
                    </tr>`;
                }
                battersData += `</tbody></table>`;
                //console.log(battersData);
                finalBattersData = battersData;

            this.setState((state) => ({
                // finalBattersData: "battersData"
            }));
}

render() {
    return(<div>
            <div dangerouslySetInnerHTML={{ __html: finalBattersData}}></div> 
        </div>
    )
}

}


