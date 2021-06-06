import { Component } from 'react';
import './App.css';
import Rect from './Rect';

class App extends Component {
  constructor(props) {
    super()
    this.title = props.title
    this.message = props.message
  }

  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">{this.title}</p>
        <p>これはサンプルのコンポーネントです。</p>
        <p className="subtitle">draw rectangle.</p>
        <Rect x="200" y="300" w="200" h="200" c="#6ff9" r="25" />
        <p>{this.message}</p>
      </div>
    </div>
  }
}

export default App;
