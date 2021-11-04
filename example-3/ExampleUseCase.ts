import {IBitcoinPriceReader} from "./IBitcoinPriceReader";

module.exports = class ExampleUseCase {
    private bitcoinPriceReader: IBitcoinPriceReader;

    constructor(bitcoinPriceReader: IBitcoinPriceReader) {
        this.bitcoinPriceReader = bitcoinPriceReader;
    }

    async getBitcoinPrice() {
        const price = await this.bitcoinPriceReader.getBitcoinPrice();

        return "Bitcoin Price: " + price;
    }
}