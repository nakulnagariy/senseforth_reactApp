import React, {Component} from 'react'

export class Eventhandler extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
        // this.state = {
        //     clicked: true,
        // };
    }

    handleClick(props) {
        // this.setState(prevState => ({
        //     clicked: !prevState.clicked,
        // }));
        alert(props.name);
    }

    render() {
        return (
            <div>
                <button name="nakul" onClick={this.handleClick}>
                    {/* {this.state.clicked ? 'On' : 'Off'} */}
                    click me
                </button>
            </div>
        )
    }
}