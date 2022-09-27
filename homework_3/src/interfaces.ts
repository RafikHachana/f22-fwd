export interface BitcoinPriceAPIResponse {
    disclaimer: string,
    time: TimeInformation,
    bpi: MultiCurrencyPriceIndex
}

export interface TimeInformation {
    updated: string,
    updatedISO: string,
    updateduk: string
}

export interface CurrencyPriceIndex {
    code: string,
    symbol: string,
    rate: string,
    description: string,
    rate_float: number
}

export interface MultiCurrencyPriceIndex {
    USD: CurrencyPriceIndex,
    GBP: CurrencyPriceIndex,
    EUR: CurrencyPriceIndex
}
