# Total flight calculator
Simple functionality to calculate source and destination airport base of unsorted flights

### Usage
- call `npm start` to run server
- run `npm test` to run test scenarios
- send POST on `http://localhost:8080/calculate` to calculate path

### Models
input:
``` js
{ 
  "flights": [
    ['ATL', 'EWR'], ['SFO', 'ATL']
  ]
}
```

response:
``` js
{
    "totalFlightPath": ['SFO', 'EWR']
}
```

### Example

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "flights":[["ATL", "EWR"], ["SFO", "ATL"]] }' \
  http://localhost:8080/calculate
  
```
