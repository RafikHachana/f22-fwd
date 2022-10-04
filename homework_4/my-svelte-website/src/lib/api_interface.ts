// Types for the Bitcoin price API

export interface BitcoinPriceAPIResponse {
    disclaimer: string,
    time: TimeInformation,
    bpi: MultiCurrencyPriceIndex
}

interface TimeInformation {
    updated: string,
    updatedISO: string,
    updateduk: string
}

interface CurrencyPriceIndex {
    code: string,
    symbol: string,
    rate: string,
    description: string,
    rate_float: number
}

interface MultiCurrencyPriceIndex {
    USD: CurrencyPriceIndex,
    GBP: CurrencyPriceIndex,
    EUR: CurrencyPriceIndex
}


