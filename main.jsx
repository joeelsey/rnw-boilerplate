import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './hello.jsx'
import World from './world.jsx'

class Main extends React.Component {
  constructor () {
    super()
  }

  render () {
    let hello = 'hello'
    let world = 'world'
    return (
    <div>
      <Hello text={hello}/>
      <World text={world}/>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))

export default Main
