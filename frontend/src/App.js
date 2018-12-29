import React, { Component } from "react"
import InputGraphSection from './Components/InputGraphSection'
import "./App.css"
import axios from 'axios';


class App extends Component {
	state = {
		result: [],
		loading: true
	}
  
  componentWillMount() {
    this.setData();
  }
  
  setData = async () => {
    let calculations = await this.getData();
    this.setState({
      result: calculations,
      loading: false
    })
  }

  getData () {
    try {
      let sendData = {
        savingsAmount: 100,
        interestRate: 0.01,
        monthlyDeposit: 10,
        calculationPeriod: 300,
        paidInterestInterval: 3
      }
      const params = {
        url: "/calculate/",
        method: 'post',
        data: sendData
      }
      return axios(params)
        .then(res => {
          return res.data.result
        })
        .catch (err => console.log('error is -------> ', err));
    }
    catch (err) {
      console.log('error is ----->', err);
    }
  }

	render() {
	    const {loading, result} = this.state

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Interest Calculator</h1>
				</header>
          {loading 
          ? 'Loading...'
          : <InputGraphSection calculations={result}/>
          }
			</div>
		)
	}
}

export default App
