import KeyManager from "../lib/KeyManager.js";
import CryptoApi from "../lib/CryptoAPI.js";

const check = {
    async price(cmd){
       try {
              const keyManager = new KeyManager();
              const key = keyManager.getKey();
              const api = new CryptoApi(key);
              const coinArray = cmd.coin.split(',');
              for(let i=0; i<coinArray.length; i++){
                     console.log(await api.getPriceData(coinArray[i], cmd.cur));
              }
       } catch (error) {
              console.error('Error: ', error.message.red);
       }
    }
}

export default check;