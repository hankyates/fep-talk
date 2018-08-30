
ws$ = rxjs.webSocket.webSocket('wss://ws-feed.pro.coinbase.com')
ws$.next({
  "type": "subscribe",
  "product_ids": [
    "ETH-USD",
  ],
  "channels": [
    "heartbeat",
    {
      "name": "ticker",
      "product_ids": [
        "ETH-USD",
      ]
    }
  ]
})

