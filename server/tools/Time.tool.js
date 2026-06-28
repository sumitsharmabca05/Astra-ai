function getCurrentTime() {
    return new Date().toLocaleTimeString();
}

module.exports = {
    name: "Time",
    execute: getCurrentTime
};