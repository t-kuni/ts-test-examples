import axios from "axios";
import {IBitcoinPriceReader} from "./IBitcoinPriceReader";

module.exports = class BitcoinPriceReader implements IBitcoinPriceReader {
    async getBitcoinPrice(): Promise<number> {
        const url = "https://api.binance.com/api/v3/trades?symbol=BTCUSDT";
        const response = await axios.get(url);
        const price = response.data[0].price;
        return price;
    }
}