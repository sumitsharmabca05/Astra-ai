const tools = require('../tools/toolsRegistry');
const {askAI} = require('../ai.client/ai.service');

async function routeCommand(input) {

    return askAI(input);
}

module.exports = routeCommand;