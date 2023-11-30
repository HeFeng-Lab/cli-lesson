#!/usr/bin/env node

const importLocal = require("import-local")
const log = require("npmlog")
const entry = require("../lib/index.js")

if (importLocal(__filename)) {
  log.info("cli", "使用本次 cli 版本")
} else {
  entry(process.argv.slice(2))
}
