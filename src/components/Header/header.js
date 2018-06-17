import React, {Component} from 'react'

export class Header extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h3>this is header</h3>
                <a href="#">link</a>
            </div>
        );
    }
}