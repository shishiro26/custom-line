import chalk from "chalk";
import debug from "debug";

export default function createLogger(name) {
  return {
    log: (...args) => console.log(chalk.gray(`[${name}]`, ...args)),
    warning: (...args) => console.log(chalk.yellow(`[${name}]`, ...args)),
    highlight: (...args) =>
      console.log(chalk.bgCyanBright(`[${name}]`, ...args)),
    debug: debug(name),
  };
}
