#!/usr/bin/env node

import { Command } from 'commander'

const program = new Command()

program
.version('1.0.0')
.command('key', 'Manage API Key -- https://docs.coinapi.io/ ')
.command('check', 'Check Coin Price Info')
.parse(process.argv)
