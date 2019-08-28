import React, { Component } from 'react';
import LotteryBall from './LotteryBall';
import './Lottery.css';

export class Lottery extends Component {
    static defaultProps = {
        title: 'Lottery',
        numOfBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({ length: this.props.numOfBalls})
        }
    }
    generate = () => {
        this.setState(currentState => ({
            numbers: currentState.numbers.map(n => 
                Math.floor(Math.random() * this.props.maxNum) + 1    
            )
        }))
    }
    handleClick = () => {
        this.generate();
    }
    render() {
        return (
            <div className="lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.numbers.map(n => {
                        return (
                            <LotteryBall num={n} />
                        )
                    })}
                </div>
                <button onClick={this.handleClick}>Generate!</button>
            </div>
        );
    }
}

export default Lottery;
