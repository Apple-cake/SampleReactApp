let dom = document.querySelector('#root')

let element = React.createElement(
  'p', {}, 'Hello React Application!'
)
ReactDOM.render(element, dom)
      // doCount();



      // function doCount() {
      //   counter++;
      //   let element = React.createElement(
      //     'p', {}, 'Hello React!'
      //   )
      //   ReactDOM.render(element, dom)
      // }