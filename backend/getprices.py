import requests
import json

def jprint(obj):
    # create a formatted string of the Python JSON object
    output = json.dumps(obj, sort_keys=True, indent=4)
    print(output)


responseBinance = requests.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
binance_data = json.loads(responseBinance.text)
print ("## binance ##")
print(binance_data["price"])


responseCoinbase = requests.get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
coinbase_data  = json.loads(responseCoinbase.text)
print ("## coinbase ##")
print(coinbase_data["data"]["amount"])


responseKraken = requests.get("https://api.kraken.com/0/public/Ticker?pair=BTCUSD")
kraken_data = json.loads(responseKraken.text)
print ("## kraken ##")
print(kraken_data["result"]["XXBTZUSD"]["a"][0])





