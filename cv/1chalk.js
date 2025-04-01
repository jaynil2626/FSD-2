import chalk from "chalk";
const log = console.log;
log("LJU");
log("Hello" + chalk.bgCyan("World"));

console.log(chalk.blue.underline.bgYellow("Testing") + chalk.red.bold.italic.underline.bgWhite("test"))