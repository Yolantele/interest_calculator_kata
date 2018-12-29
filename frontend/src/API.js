import request from "axios";

export const calculate = (savingsAmount, interestRate, monthlyDeposit=0, calculationPeriod=600, paidInterestInterval=1) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			interestRate,
			monthlyDeposit,
			calculationPeriod,
			paidInterestInterval
		})
}
