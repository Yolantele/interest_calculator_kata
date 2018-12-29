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

    if savings_amount is None or interest_rate is None or monthly_deposit is None:
        return HttpResponseBadRequest('Required parameters are not provided')

    if calculation_period is None:
        calculation_period = 600 # 50 years of 12 month.

    if interval is None:
        interval = 1 # paid interest interval is set to every month

    repeat_savings_calculation = calculation_period / interval 
    result = []
    for i in range(int(repeat_savings_calculation)):
        savings_before_interest = monthly_deposit * interval + savings_amount
        savings_after_interest = savings_before_interest * interest_rate + savings_before_interest
        savings_amount = savings_after_interest
        result.append(savings_amount)

    print('done')
    return JsonResponse({'result': result})


def hello(request):
    return JsonResponse({'hello': 'hello from interest calculator. All is working'})

