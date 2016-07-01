import React from 'react'
import imgs from './imgs'

class RiceCake extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      n: 1,
      val: imgs[1]
    };
    this.tick = this.tick.bind(this);
  }

  tick(){
    var current = this.state.n;

    current++;
    if(current>Object.keys(imgs).length){ current = 1; }

    this.setState({
      n: current,
      val: imgs[current]
    })
  }

  componentDidMount(){
    this.interval = setInterval(this.tick,this.props.duration);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render(){
    var src = "data:image/gif;base64," + this.state.val;
    return (
        <div>
        <img src={src} />
        </div>
    );
  }
};

RiceCake.defaultProps = {
  duration: 1000
}

export default RiceCake;
