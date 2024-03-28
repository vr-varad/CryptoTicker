import axios from "axios";
import colors from "colors";

class CryptoApi{
    constructor(apikey){
        this.apikey = apikey,
        this.baseUrl = 'https://rest.coinapi.io/v1/exchangerate/'
    }

    async getPriceData(coin, cur){
        try {
            const res = await axios.get(`${this.baseUrl}${coin}/${cur}?apikey=${this.apikey}`);
            const data = res.data;
            const coinData = `${coin}: rate is ${data.rate} in ${cur}`
            return coinData;
        } catch (error) {
            console.error('Error: ', error.message.red);
        }
    }
}

export default CryptoApi;