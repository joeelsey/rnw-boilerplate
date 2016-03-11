import React from 'react'

class Hello extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let hello = this.props.text
    return <div>{hello} Small Change</div>
  }
}

export default Hello

Hello.propTypes = {
  text: React.PropTypes.string
}
