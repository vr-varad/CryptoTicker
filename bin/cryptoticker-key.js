import { Command } from 'commander'
import key from '../commands/key.js'

const program = new Command()

program
.command('set')
.description('Set the API Key -- Get at https://docs.coinapi.io/')
.action(key.set)


program
.command('show')
.description('Show the API Key')
.action(key.show)


program
.command('remove')
.description('Remove the API Key')
.action(key.remove)

program.parse(process.argv)