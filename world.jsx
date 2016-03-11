import React from 'react'

class World extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let world = this.props.text
    return <div>Double DOUBLE {world}</div>
  }
}

export default World

World.propTypes = {
  text: React.PropTypes.string
}
