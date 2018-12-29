import React, { Component } from "react";
import CurrencyInput from "./CurrencyInput";
import SliderInput from "./SliderInput";
import DisplayGraph from "./DisplayGraph";
import "./InputGraphSection.css";
import axios from "axios";

const CALCULATIONS_URL = 'https://ancient-lowlands-85831.herokuapp.com/calculate/';

export default class InputGraphSection extends Component {
  constructor(props) {
		super(props);

		this.state = {
      result: [],
		};
	}

  componentDidMount(){
    this.setCalculationsData();
    console.log(this.state.result)
  }

  setCalculationsData = async () => {
    let data = await this.getCalculations()
    this.setState({
      result: data,
    })
  }

  getCalculations(){
    console.log('inside getCalc ====>')
    let calculationData = {};
    // let calculationData = {
    //   "savingsAmount": 200,
    //   "interestRate": 0.03,
    //   "monthlyDeposit":20,
    //   "calculationPeriod": 600,
    //   "paidInterestInterval": 12
    // };

    calculationData.savingsAmount = 100;
    calculationData.interestRate = 0.05;
    calculationData.monthlyDeposit = 20;
    calculationData.calculationPerid = 1;
    calculationData.paidInterestInterval = 1;

    console.log('====> calculation data ', calculationData)

    try {
      const params = {
        url: CALCULATIONS_URL,
        method: 'post',
        calculationData,
      };
      return axios(params)
        .then(res => res.data)
        .catch(err => console.log('error is --->', err));
    }
    catch (err) {
      console.log('error is ----->', err);
    } 
  }
  
  render() {
    const { result, currency } = this.props

    return (
      <div>
        <div className="financial-inputs">
          <p className="input-label">How much have you saved?</p>
          <CurrencyInput defaultValue={0} currency={(currency) => {this.setState(currency)} }/>

          <p className="input-label">How much will you save each month?</p>
          <CurrencyInput defaultValue={0} />

          <p className="input-label">
            How much interest will you earn per year?
          </p>
          <SliderInput defaultValue={4} />
        </div>
        <div className="financial-display">
          {/*We have included some sample data here, you will need to replace this
            with your own. Feel free to change the data structure if you wish.*/}
          <DisplayGraph
            data={[
              {
                month: 1,
                amount: 500
              },
              {
                month: 2,
                amount: 700
              },
              {
                month: 3,
                amount: 1000
              },
              {
                month: 4,
                amount: 1500
              }
            ]}
          />
        </div>
      </div>
    )
  }
}
