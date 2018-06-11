//Built upon https://github.com/LinusU/wext-shipit 

#!/usr/bin/env node

require('dotenv').config()

const neodoc = require('neodoc')

const firefox = require('./deploy/firefox')
const UserError = require('./deploy/user-error')

const usage = `
Usage:
  shipit chrome <source>
  shipit firefox <source>
  shipit opera <source>
`

async function main () {
  const args = neodoc.run(usage)

 

  if (args.firefox) {
    await firefox(args['<source>'])
  }

}

main().catch((err) => {
  process.exitCode = 1
  console.error((err instanceof UserError) ? err.message : err.stack)
})