import KeyManager from '../lib/KeyManager.js';
import inquirer from 'inquirer';
import color from 'colors';
import {isRequired} from '../utils/validation.js';

const key = {
    async set() {
       const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key'.green +  '-- https://docs.coinapi.io/',
                validate : isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);
        if(key){
            console.log('API Key Set'.blue);
        }

          
     },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();
            console.log('Current API Key: ', key.yellow);
            return key;
        } catch (error) {
            console.error('Error: ', error.message.red);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
            keyManager.deleteKey();
            console.log('Removed Current API Key'.red);
        } catch (error) {
            console.error('Error: ', error.message.red);
        }
    }
}

export default key;