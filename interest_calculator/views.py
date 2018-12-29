from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.http import require_GET
from django.views.decorators.csrf import csrf_exempt
import json

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    interest_rate = params.get('interestRate', None)
    monthly_deposit = params.get('monthlyDeposit', None)
    calculation_period = params.get('calculationPeriod', None)
    interval = params.get('paidInterestInterval', None)

    if savings_amount is None or interest_rate is None or monthly_deposit is None or calculation_period is None:
        return HttpResponseBadRequest('Required parameters are savingsAmount, interestRate, monthlyDeposit, calculationPeriod')

    if type(interest_rate) is not float:
        return HttpResponseBadRequest('interestRate should be a float')

    if type(calculation_period) is not int:
        return HttpResponseBadRequest('calculationPeriod should be set in number of months as an integer')

    
    repeat_savings_calculation = calculation_period / interval 
    result = []

    for i in range(int(repeat_savings_calculation)):
        savings_before_interest = monthly_deposit * interval + savings_amount
        savings_after_interest = savings_before_interest * interest_rate + savings_before_interest
        savings_amount = savings_after_interest
        result.append(savings_amount)

    return JsonResponse({
        'initialSavings': params.get('savingsAmount', None),
        'monthlyDeposit': monthly_deposit,
        'interestRate': interest_rate,
        'interestIntervalInMonths': interval,
        'calculationPeriod': calculation_period,
        'interestCalculations': result,
    })


def hello(request):
    return JsonResponse({'hello': 'hello from interest calculator. All is working'})

