const readline = require('readline');
const routeCommand = require('./core/commandRouter');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("ASTRA Core Started");

rl.on('line', async (input) => {

    const response = await routeCommand(input);

    console.log("ASTRA:", response);

});