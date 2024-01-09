// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstCard: false,
    lastCard: false,
  }

  firstName = () => {
    const {firstCard} = this.state
    this.setState(() => ({firstCard: !firstCard}))
  }

  lastName = () => {
    const {lastCard} = this.state
    this.setState(() => ({lastCard: !lastCard}))
  }

  render() {
    const {firstCard, lastCard} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btn-container">
          <div className="btn-card">
            <button
              type="button"
              className="first-button"
              onClick={this.firstName}
            >
              Show/Hide Firstname
            </button>
            {firstCard ? <p className="result-card">Joe</p> : ''}
          </div>
          <div className="btn-card">
            <button
              type="button"
              className="first-button"
              onClick={this.lastName}
            >
              Show/Hide Lastname
            </button>
            {lastCard ? <p className="result-card">Jonas</p> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
