import { Command } from 'commander'
import check from '../commands/check.js'

const program = new Command()

program
.command('price')
.description('Check price of coins')
.option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP')
.option('--cur <currency>', 'Change the currency', 'INR')
.action((cmd) => check.price(cmd))

program.parse(process.argv)