//backend1/src/db/knex.ts
// This file sets up the Knex.js database connection using a configuration file.
// It imports the Knex library and the configuration settings, applies string case conversion,      

import Knex from "knex";
import config from "./knexfile";

// @ts-ignore
import knexStringCase from "knex-stringcase";

const knexStringCaseConfig = knexStringCase(
  config[process.env.NODE_ENV || "local"] as any,
);

const knex = Knex(knexStringCaseConfig);

export default knex;