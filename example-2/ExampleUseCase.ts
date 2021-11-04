import axios from "axios";

module.exports = class ExampleUseCase {
    async getBitcoinPrice() {
        const url = "https://api.binance.com/api/v3/trades?symbol=BTCUSDT";
        const response = await axios.get(url);
        const price = response.data[0].price;

        return "Bitcoin Price: " + price;
    }
}