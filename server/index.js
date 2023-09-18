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

const userController = require("./controllers/userController");

Object.keys(userController).forEach(key => {
    const controller = userController[key];
    server[controller.method](controller.path, controller.handler);
});

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: "auth error" });
    }

    next();
});

server.use(router);

server.listen(8000);
