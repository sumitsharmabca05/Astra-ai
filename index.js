// index.js
const { chat } = require("./ollama");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const conversationHistory = [];

async function main() {
  console.log("🤖 ASTRA AI is running. Type your command (or 'exit' to quit).\n");

  const ask = () => {
    rl.question("You: ", async (input) => {
      if (input.toLowerCase() === "exit") {
        console.log("Shutting down ASTRA...");
        rl.close();
        return;
      }

      // Add user message to history
      conversationHistory.push({ role: "user", content: input });

      try {
        const reply = await chat(conversationHistory);
        console.log(`\nASTRA: ${reply}\n`);

        // Add assistant reply to history (multi-turn memory)
        conversationHistory.push({ role: "assistant", content: reply });
      } catch (err) {
        console.error("Error talking to Ollama:", err.message);
      }

      ask(); // loop
    });
  };

  ask();
}

main();