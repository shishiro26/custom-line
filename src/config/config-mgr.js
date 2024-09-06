import logger from "../logger.js";
import { cosmiconfigSync } from "cosmiconfig";
import Ajv from "ajv";
import schema from "./schema.json" assert { type: "json" };

const configLoader = cosmiconfigSync("tool");

const ajv = new Ajv({ strict: true });
const log = logger("config");

export default function getConfig() {
  const result = configLoader.search(process.cwd());

  if (!result) {
    logger.warning("Could not find configuration, using default");
    return { port: 6969 };
  }

  const isValid = ajv.validate(schema, result.config);

  if (!isValid) {
    logger.warning("Invalid configuration was supplied");
    console.log(ajv.errorsText(ajv.errors, { separator: "\n" }));
    process.exit(1);
  }

  log.debug("Found configuration", JSON.stringify(result.config));
  return result.config;
}
