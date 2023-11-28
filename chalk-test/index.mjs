import chalk from "chalk"
import { Chalk } from "chalk"

console.log(chalk.red("hello world"))
console.log(chalk.blue("hello world"))

console.log(chalk.red.bgGreen.bold("hello world"))

console.log(chalk.red("hello", "world"))
console.log(chalk.red("hello", chalk.underline("world")))

console.log(chalk.rgb(255, 255, 255, 0).underline("hello world"))
console.log(chalk.hex("#fff000").bold("hello world"))
console.log(chalk.hex("#fff000")("hello world"))

const error = (...text) => chalk.bold.hex("#fff000")(text)
const warning = (...text) => chalk.bold.hex("#ffa500")(text)

console.log(error("Error!"))
console.log(warning("Warning!"))

/**
	The color support for Chalk.

	By default, color support is automatically detected based on the environment.

	Levels:
	- `0` - All colors disabled.
	- `1` - Basic 16 colors support.
	- `2` - ANSI 256 colors support.
	- `3` - Truecolor 16 million colors support.
	*/
const customChalk = new Chalk({
  level: 1,
})

console.log(customChalk.blue("hello world!"))
console.log(customChalk.hex("#fff000")("hello world!"))
