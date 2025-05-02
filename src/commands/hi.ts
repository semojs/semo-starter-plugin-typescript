export const disabled = false; // Set to true to disable this command temporarily
export const command = "hi";
export const desc = "hi";
// export const aliases = ''
// export const middlewares = []

export const builder = function (yargs) {};

export const handler = async function (argv) {
  console.log("Hey you!");
};
