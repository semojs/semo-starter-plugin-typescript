import { Argv, ArgvExtraOptions } from "@semo/core";

export const disabled = false; // Set to true to disable this command temporarily
export const command = "hi";
export const desc = "hi";
// export const aliases = ''
// export const middlewares = []

export const builder = function (yargs: Argv) {};

export const handler = async function (argv: ArgvExtraOptions) {
  console.log("Hey you!");
};
