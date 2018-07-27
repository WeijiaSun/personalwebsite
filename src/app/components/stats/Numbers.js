import React, { Component } from 'react';

class Numbers extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 25 };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 200);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1992-12-08T04:00:00');
    this.setState({
      age: ((Date.now() - birthTime) / divisor).toFixed(9)
    });
  }

  render() {
    return (
      <div>
        {this.state.age}
      </div>
    );
  }
}

export default Numbers;
