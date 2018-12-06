import RequestWrapper from './RequestWrapper'
import BitcoinRequestWrapper from './BitcoinRequestWrapper'

export const ExchangeService = (function () {

  return {

    convertCzkToUsd: async function (amountCzk) {
      let payload = {
        'from': 'CZK',
        'to': 'USD',
        'type': 'BUY',
        'amount': amountCzk != null ? amountCzk : 100000,
        'buy': 'true'
      }

      return RequestWrapper({
        url: 'v2/rates/exchangerates',
        method: 'POST',
        data: payload,
      })
    },

    getCzkToBtcRate: async function () {
      return BitcoinRequestWrapper({
        url: '/average/CZK',
        method: 'GET',
      })
    }

  }

})()
