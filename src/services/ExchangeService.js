import RequestWrapper from './RequestWrapper'
import BitcoinRequestWrapper from './BitcoinRequestWrapper'

export const ExchangeService = (function () {

  return {

    getCzkToUsdRate: async function () {
      let payload = {
        'from': 'CZK',
        'to': 'USD',
        'type': 'CASH',
        'amount': 1,
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
