import React, { Component } from "react"
import CurrencyInput from "./CurrencyInput"
import SliderInput from "./SliderInput"
import DisplayGraph from "./DisplayGraph"
import "./styling/InputGraphSection.css"

export default class InputGraphSection extends Component {
  render() {
    const { result, value, calculations } = this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0}/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0}/>

          <p className="input-label">How much interest will you earn per year?</p>
          <SliderInput defaultValue={4}/>
        </div>
        <div className="financial-display">
          <DisplayGraph
            data={calculations}
          />
        </div>
      </div>
    )
  }
}
