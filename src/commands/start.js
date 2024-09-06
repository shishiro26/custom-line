import createLogger from "../logger.js";
const logger = createLogger("commands:start");
export default function start(config) {
  logger.highlight("  Starting the app  ");
  logger.debug("Received configuration", JSON.stringify(config));
}
    