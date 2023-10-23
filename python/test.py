from math import floor
from collections import defaultdict

def solution(balances, requests):
    account_balances = defaultdict(int)
    cashback_schedule = defaultdict(int)
    
    for account_id, balance in enumerate(balances, start=1):
        account_balances[account_id] = balance
    
    invalid_request_index = None
    
    for request_index, request in enumerate(requests, start=1):
        parts = request.split()
        request_type, timestamp, holder_id, amount = parts[0], int(parts[1]), int(parts[2]), int(parts[3])
        
        if holder_id not in account_balances:
            invalid_request_index = -request_index
            break
        
        if request_type == "deposit":
            account_balances[holder_id] += amount
        elif request_type == "withdraw":
            if amount > account_balances[holder_id]:
                invalid_request_index = -request_index
                break
                
            account_balances[holder_id] -= amount
            cashback_schedule[holder_id] = max(cashback_schedule[holder_id], timestamp + 24 * 3600)
    
    for holder_id, cashback_time in cashback_schedule.items():
        if cashback_time <= timestamp:
            cashback_amount = floor(account_balances[holder_id] * 0.02)
            account_balances[holder_id] += cashback_amount
    
    if invalid_request_index is not None:
        return [invalid_request_index]
    
    final_balances = [account_balances[account_id] for account_id in sorted(account_balances.keys())]
    return final_balances

# Example usage
initial_balances = [1000, 1500]
requests = [
    "withdraw 1613327630 2 480",
    "withdraw 1613327644 2 800",
    "withdraw 1614105244 1 100",
    "deposit 1614108844 2 200",
    "withdraw 1614108845 2 150"
]

result = solution(initial_balances, requests)
print(result)