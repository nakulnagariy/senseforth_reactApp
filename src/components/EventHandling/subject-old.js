import React, { Component } from 'react'

export class Subject extends React.Component {
    percentToDecimal (decimal) {
        return ((decimal * 100) + '%')
    }
    
    calcMarks (total, goal)  {
        return this.percentToDecimal(total/goal)
    }

    render() {
        return (
        <div className="Marks">
            <div>Math: {this.props.math}</div>
            <div>English: {this.props.english}</div>
            <div>Science: {this.props.science}</div>
            <div>Computer: {this.props.computer}</div>
            <div>Total %: {this.calcMarks(
                                (this.props.math + 
                                 this.props.english +
                                 this.props.science +
                                 this.props.computer
                                ), 400)
                        }
            </div>
        </div>
        )
    }
}