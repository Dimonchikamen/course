const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

server.use(async (req, res, next) => {
    await new Promise(res => {
        const randomMs = Math.max(700, Math.random() * 1000);
        setTimeout(res, randomMs);
    });
    next();
});

const connectController = require("./helpers/connectController");

connectController(server, require("./controllers/userController"));
connectController(server, require("./controllers/profileController"));

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "auth error" });
    }

    next();
});

server.use(router);

server.listen(8000);
