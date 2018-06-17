import React, {Component} from 'react'

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>This is {this.props.name}</h2>
            </div>
        );
    }

}