const {
    server: { port },
} = require("config");
const server = require("./server");

(async () => {
    try {
        await server.start();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    // TODO use logger
    console.log(`Server running at port ${port}`);

    process.on("uncaughtException", (err) => {
        throw err;
    });

    process.on("unhandledRejection", (err) => {
        // TODO use logger
        console.log(err);
        process.exit(1);
    });
})();
