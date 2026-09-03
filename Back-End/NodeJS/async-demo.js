console.log("1. Start of Scrpit");

setTimeout(() => {
    console.log("3. This runs after 2 seconds (from the event queue)");
}, 2000);

console.log("2. End of Script (runs immediately, BEFORE the timeout)");