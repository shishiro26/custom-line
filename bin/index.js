#!/usr/bin/env node
import arg from "arg";
import chalk from "chalk";
import start from "../src/commands/start.js";
import getConfig from "../src/config/config-mgr.js";
import logger from "../src/logger.js";
const log = logger("bin");

try {
  const args = arg({
    "--start": Boolean,
    "--build": Boolean,
  });

  if (args["--start"]) {
    const config = getConfig();
    start(config);
  }
} catch (err) {
  log.warning(err.message);
  console.log();
  usage();
}

function usage() {
  console.log(`${chalk.whiteBright("tool [CMD]")}
    ${chalk.greenBright("--start")}\tStarts the app
    ${chalk.greenBright("--build")}\tBuilds the app`);
}
