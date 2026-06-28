const { Ollama } = require('ollama');

const ollama = new Ollama({ host: 'http://localhost:11434' });

async function askAI(prompt) {
    const response = await ollama.chat({
        model: 'llama3',
        messages: [{ role: 'user', content: prompt }]
    });
    return response.message.content;
}

module.exports = { askAI };