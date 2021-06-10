import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: 'count start!',
      flag: true,
    }
    // イベントの初期化
    this.doAction = this.doAction.bind(this)
  }

  doAction(event) {
    this.setState({
      counter: this.state.counter + 1,
      msg: '*** count: ' + this.state.counter + ' ***',
      flag: !this.state.flag
    })
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count number.</p>
        {this.state.flag ?
          <div className="alert alert-primary text-right">
          <p className="h5 mb-4">{this.state.msg}</p>
          </div>
        :
          <div className="alert alert-primary text-left">
          <p className="h5 mb-4">{this.state.msg}です。</p>
          </div>
        }
        <button className="btn btn-primary" onClick={this.doAction}>
          Click
        </button>
      </div>
    </div>
  }
}

export default App;
