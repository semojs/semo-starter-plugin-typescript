import { Argv, ArgvExtraOptions } from '@semo/core'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

export const disabled = false // Set to true to disable this command temporarily
export const command = 'hi'
export const desc = 'hi'
// export const aliases = ''
// export const middlewares = []

export const builder = function (_yargs: Argv) {}

export const handler = async function (_argv: ArgvExtraOptions) {
  console.log('Hey you!')
}
