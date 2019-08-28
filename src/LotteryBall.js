import React, { Component } from 'react';
import './LotteryBall.css';

export class LotteryBall extends Component {
    render() {
        return (
            <div className="lotteryBall">
                {this.props.num}
            </div>
        );
    }
}

export default LotteryBall;
