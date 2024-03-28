import Configstore from "configstore";

class KeyManager{
    constructor(){
        this.conf = new Configstore('cryptoticker');
    }

    setKey(key){
        this.conf.set('apiKey', key);
        return key;
    }

    getKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error('No API Key Found - Get a key at https://docs.coinapi.io/');
        }
        return key;
    }

    deleteKey(){
        const key = this.conf.get('apiKey');
        if(!key){
            throw new Error('No API Key Found - Get a key at https://docs.coinapi.io/');
        }
        this.conf.delete('apiKey');
        return;
    }
}

export default KeyManager;